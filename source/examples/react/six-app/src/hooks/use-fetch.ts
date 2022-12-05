import { useState, useCallback } from 'react';

const parse = (response: Response) => response.json();

enum FetchState {
  NotLoaded,
  Loading,
  Loaded,
  Error,
}

export const useFetch = <T>(url: string, initial: T) => {
  const [state, setState] = useState(FetchState.NotLoaded);
  const [data, setData] = useState<T>(initial);

  const execute = useCallback(async () => {
    try {
      setState(FetchState.Loading);
      const response = await fetch(url).then(parse);
      setData(response);
      setState(FetchState.Loaded);
    } catch (err) {
      setState(FetchState.Error);
    }
  }, [url]);

  const loading = state === FetchState.Loading;
  const notLoaded = state === FetchState.NotLoaded;
  const error = state === FetchState.Error;

  return { loading, notLoaded, error, data, execute };
};
