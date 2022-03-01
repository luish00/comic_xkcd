import { useCallback, useState } from 'react';

const URL_BASE = 'https://xkcd.com/';

async function apiFetch({ body, headers = {}, method, params = {}, url }) {
  let rest = {};

  if (method === 'POST') {
    rest = { body: JSON.stringify(body) }
  }

  return fetch(`${URL_BASE}/${url}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...rest,
  });
};

const useApiGet = ({ headers = {} } = {}) => {
  const [result, setResult] = useState(null);
  const [isLoading, setLoading] = useState(false);
  let wrapperData = { isValid: false, data: null };

  const get = useCallback(async ({ params, url } = {}) => {
    setLoading(true);

    try {
      const request = await apiFetch({ params, headers, url, method: 'GET' });
      const data = request.status === 200 ? await request.json() : null;

      wrapperData = {
        isValid: request.ok,
        status: request.status,
        data,
      };

    } catch (error) {
      wrapperData = {
        data: null,
        isValid: false,
        menssage: error.menssage,
        status: 500,
      };
    }

    setLoading(false);
    setResult(wrapperData);

    return wrapperData;
  }, []);

  return [get, result, isLoading];
};

export { useApiGet }