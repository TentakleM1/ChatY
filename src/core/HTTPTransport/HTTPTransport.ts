import queryStringify from "../utils/queryStringify/queryStringify";

type Options = Record<string, any>;

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const BASE_URL = 'https://ya-praktikum.tech/api/v2';

export default class HTTPTransport {

    public get = (url: string, options: Options = {}) => {
             
            return this.request(url, {...options, method: METHODS.GET}, options.timeout);
    };

    public post = (url: string, options: Options = {}) => {
            return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    public put = (url: string, options: Options = {}) => {
            return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    public delete = (url: string, options: Options = {}) => { 
            return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    private request = (url: string, options: Options = {}, timeout = 5000) => {
            const {headers = {}, method, data, retries = 3} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
                            return;
                    }

                const xhr = new XMLHttpRequest();
                    const isGet = method === METHODS.GET;

                xhr.open(
                            method, 
                            isGet && !!data
                                    ? `${BASE_URL}${url}?${queryStringify(data)}`
                                    : `${BASE_URL}${url}`,
                    );

                    Object.keys(headers).forEach(key => {
                            xhr.setRequestHeader(key, headers[key]);
                    });
            
                xhr.onload = function() {
                      resolve(xhr);
                };
            
                xhr.onabort = reject;
                xhr.onerror = reject;
            
                xhr.timeout = timeout;
                xhr.ontimeout = reject;
                    
                  if (isGet || !data) {
                        xhr.send();
                    } else {
                            xhr.send(data);
                    }
          });
    };
}
