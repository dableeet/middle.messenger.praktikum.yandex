import queryStringify from '@/utils/query-stringify';

import { METHODS, Options } from './types';

class HTTPTransport {
  private _request(url: string, options: Options, method: string) {
    return this.request(url, { ...options, method }, options.timeout);
  }

  get = (url: string, options: Options) => {
    if (options.data) {
      url = `${url}?${queryStringify(options.data)}`;
    }
    return this._request(url, options, METHODS.GET);
  };

  put = (url: string, options: Options) => {
    return this._request(url, options, METHODS.PUT);
  };
  post = (url: string, options: Options) => {
    return this._request(url, options, METHODS.POST);
  };
  delete = (url: string, options: Options) => {
    return this._request(url, options, METHODS.DELETE);
  };

  request = (
    url: string,
    options: Options | Options<Record<string, unknown>>,
    timeout = 5000,
  ) => {
    const { headers, data, method } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method, url);

      Object.entries(headers).forEach(([key, val]) =>
        xhr.setRequestHeader(key, val),
      );

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default HTTPTransport;
