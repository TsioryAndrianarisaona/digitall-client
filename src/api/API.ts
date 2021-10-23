export default class API {
  baseHost: string = 'http://192.168.88.89:8080/';

  get = (url: string, token?: string) => {
    if (token) {
      return fetch(url, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
    } else return fetch(url);
  };

  post = (formData: FormData, json: any, token?: string) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': json ? 'application/json' : 'multipart/form-data',
        Authorization: token ? 'Bearer ' + token : null,
      },
      body: json ? JSON.stringify(json) : formData,
    };
    return requestOptions;
  };

  delete = (token?: string) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        Authorization: token ? 'Bearer ' + token : null,
      },
    };
    return requestOptions;
  };
}
