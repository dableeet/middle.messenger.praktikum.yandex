import { EventBusMethod, Callback } from './types';

class EventBus {
  listeners: Record<string, Callback[]>;
  constructor() {
    this.listeners = {};
  }

  on: EventBusMethod['cb'] = (event, callback) => {
    this._chekListeners(event);

    this.listeners[event].push(callback);
  };

  off: EventBusMethod['cb'] = (event, callback) => {
    this._checkEventError(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  };

  emit: EventBusMethod['args'] = (event, ...args) => {
    this._checkEventError(event);

    this.listeners[event].forEach((listener) => listener(...args));
  };

  private _checkEventError(event: string) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }

  private _chekListeners(event: string) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
  }
}

export default EventBus;
