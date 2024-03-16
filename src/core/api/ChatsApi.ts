import BaseAPI from "./BaseApi";
import HTTPTransport from "../HTTPTransport/HTTPTransport";

const chatsAPIInstance = new HTTPTransport();

export default class ChatsAPI extends BaseAPI {

    getChats() {
        return chatsAPIInstance.get('/chats');
    }
}