import BaseAPI from "./BaseApi";
import HTTPTransport from "../HTTPTransport/HTTPTransport";

const authAPIInstance = new HTTPTransport();

export default class AuthApi extends BaseAPI {

    create() {
        return authAPIInstance.post('/auth/singin', {title: 'string'});
    }
}
