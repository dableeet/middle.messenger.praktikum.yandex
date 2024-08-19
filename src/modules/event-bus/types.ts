export type Callback = (...args: unknown[]) => void;

export type EventBusMethod = {
  cb: (event: string, callback: Callback) => void;
  args: (event: string, ...args: unknown[]) => void;
};
