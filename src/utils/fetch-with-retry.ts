import { Options } from '@/modules/http-request/types';

export default function fetchWithRetry(
  url: string,
  options: Options,
): Promise<Response> {
  const { tries = 1 } = options;

  function onError(err: Error): Promise<Response> {
    const triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }

    return fetchWithRetry(url, { ...options, tries: triesLeft });
  }

  return fetch(url, options).catch(onError);
}
