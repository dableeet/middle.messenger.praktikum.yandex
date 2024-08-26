import { v4 as makeUUID } from 'uuid';

import EventBus from '../event-bus';
import { Children, MetaData, Props, Compile } from './types';

abstract class Block {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  props: Props;
  children: Children;
  eventBus: () => EventBus;

  private _element!: HTMLElement;
  private _meta: MetaData;
  private _id: string | null = null;

  constructor(tagName = 'div', propsAndChildren: Props = {}) {
    const eventBus = new EventBus();

    this._meta = {
      tagName,
      propsAndChildren,
    };

    const { children, props } = this._getChildren(propsAndChildren);

    this.children = children;

    if (!props.settings?.withInternalID) {
      this.props = this._makePropsProxy(props);
    } else {
      this._id = makeUUID();
      this.props = this._makePropsProxy({ ...props, id: this._id });
    }

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this, this.props, {}),
    );
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _getChildren(propsAndChildren: Props) {
    const children: Children = {};
    const props: Props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName as string);
  }

  init() {
    this._createResources();

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child) => {
      child.dispatchComponentDidMount();
    });
  }

  abstract componentDidMount(oldProps?: Props): void;

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  abstract componentDidUpdate(oldProps: Props, newProps: Props): boolean;

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _addEvents() {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        this._element.addEventListener(eventName, events[eventName]);
      });
    }
  }

  private _removeEvents() {
    const { events } = this.props;

    if (events) {
      Object.keys(events).forEach((eventName) => {
        this._element.removeEventListener(eventName, events[eventName]);
      });
    }
  }

  private _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);
    this._addEvents();
  }

  abstract render(): DocumentFragment;

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props: Props) {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop: string, value) => {
        target[prop] = value;
        this.eventBus().emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement<T>(tagName: string): T {
    const element = document.createElement(tagName);
    this._id && element.setAttribute('data-id', this._id);
    return element as T;
  }

  compile(template: Compile, props: Props) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment =
      this._createDocumentElement<HTMLTemplateElement>('template');

    fragment.innerHTML = template(propsAndStubs);

    Object.values(this.children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)!;

      stub.replaceWith(child.getContent()!);
    });

    return fragment.content;
  }

  show() {
    if (this.element) {
      this.getContent().style.display = 'block';
    }
  }

  hide() {
    if (this.element) {
      this.getContent().style.display = 'none';
    }
  }
}

export default Block;
