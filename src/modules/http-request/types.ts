export enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

export type Options<T = Record<string, string>> = {
  method: string;
  headers: Record<string, string>;
  data?: T;
  timeout?: number;
  tries?: number;
};
