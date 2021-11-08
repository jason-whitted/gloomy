import { ApiError } from '../ApiError';

export default ({ url, method, data, headers, ...other }) => {
  headers['Accept'] = 'application/json';
  headers['Content-Type'] = 'application/json';

  const options = {
    method,
    body: data ? JSON.stringify(data) : null,
    headers: headers,
    cache: 'no-store',
    ...other,
  };

  if (/^(get|head)$/i.test(method)) {
    delete options.body;
  }

  return fetch(url, options).then(response => {
    const { status, statusText } = response;
    if (status >= 400) throw new ApiError(response, `${status} - ${statusText}`);
    else if (status === 204) return undefined;
    return response.json();
  });
};
