import HTTPTransport from "../HTTPTransport/HTTPTransport";

export class BaseAPI {

  protected http: HTTPTransport;

  constructor(point: string) {
    this.http = new HTTPTransport(point);
  }

    create() {
      throw new Error('Not implemented');
    }
  
    request() {
      throw new Error('Not implemented');
    }
  
    update() {
      throw new Error('Not implemented');
    }
  
    delete() {
      throw new Error('Not implemented');
    }
  }
  
  export default BaseAPI;


  
