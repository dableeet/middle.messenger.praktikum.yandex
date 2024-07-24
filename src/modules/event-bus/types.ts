export type Callback = (...args: unknown[]) => void;

export type EventBusMethod = (event: string, callback: Callback) => void;
