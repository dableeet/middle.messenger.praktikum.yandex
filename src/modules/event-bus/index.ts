import { EventBusMethod, Callback } from './types';

class EventBus {
  listeners: Record<string, Callback[]>;
  constructor() {
    this.listeners = {};
  }

  on: EventBusMethod = (event, callback) => {
    this._chekListeners(event);

    this.listeners[event].push(callback);
  };

  off: EventBusMethod = (event, callback) => {
    this._checkEventError(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback,
    );
  };

  emit = (event: string, ...args: unknown[]) => {
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
