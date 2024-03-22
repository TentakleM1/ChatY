import BaseAPI from "./BaseApi";

class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    public getChats() {
        return this.http.get('');
    }
}

export default new ChatsAPI();
