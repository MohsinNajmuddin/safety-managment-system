export const sendRequest = (
  method,
  url,
  body = null,
  headers = {
    'Content-type': 'application/json',
  },
  options = {},
) => {
  const request = new Request(url, {
    method,
    body: body && JSON.stringify(body),
    headers,
    ...options,
    credentials: 'include',
    mode: 'cors',
  });
  return new Promise((resolve, reject) => {
    fetch(request).then(response => {
      if (response.ok) {
        if (response.status === 204) {
          return resolve({});
        }
        return resolve(response.json());
      }
      reject(response.json());
    });
  });
};
