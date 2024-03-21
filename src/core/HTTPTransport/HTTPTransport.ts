import queryStringify from "../utils/queryStringify/queryStringify";

type Options = Record<string, any>;

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export default class HTTPTransport {

        static BASE_URL = 'https://ya-praktikum.tech/api/v2';
        point: string;

        constructor(point: string) {
                this.point = `${HTTPTransport.BASE_URL}${point}`
        }

    public get = (url: string, options: Options = {}) => {      
            return this.request(options ? `${this.point}${url}` : `${this.point}${url}?${queryStringify(options.data)}`, {...options, method: METHODS.GET}, options.timeout);
    };

    public post = (url: string, options: Options = {}) => {
            return this.request(`${this.point}${url}`, {...options, method: METHODS.POST}, options.timeout);
    };

    public put = (url: string, options: Options = {}) => {
            return this.request(`${this.point}${url}`, {...options, method: METHODS.PUT}, options.timeout);
    };

    public delete = (url: string, options: Options = {}) => { 
            return this.request(`${this.point}${url}`, {...options, method: METHODS.DELETE}, options.timeout);
    };

    private request = (url: string, options: Options = {}, timeout = 5000) => {
            const {method, data, retries = 3} = options;

            return new Promise(function(resolve, reject) {
                    if (!method) {
                            reject('No method');
                            return;
                    }

                const xhr = new XMLHttpRequest();
                const isGet = method === METHODS.GET;

                xhr.open(method, url);

                if(data) {
                        xhr.setRequestHeader('Content-Type', 'application/json');
                }

            
                xhr.onreadystatechange = () => {
                        if (xhr.readyState === XMLHttpRequest.DONE) {
                            if (xhr.status < 400) {
                                resolve(xhr.response);
                            } else {
                                reject(xhr.response);
                            }
                        }
                };
            
                xhr.onabort = reject;
                xhr.onerror = reject;
            
                xhr.timeout = timeout;
                xhr.ontimeout = reject;
                
                xhr.responseType = 'json';
                xhr.withCredentials = true;

                if (isGet || !data) {
                        xhr.send();
                } else {
                        xhr.send(JSON.stringify(data));
                }
          });
    };
}
