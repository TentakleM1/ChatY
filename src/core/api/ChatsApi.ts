import BaseAPI from "./BaseApi";

export interface IChat {
    title: string
}

class ChatsAPI extends BaseAPI {
    constructor() {
        super('/chats');
    }

    public getChats() {
        return this.http.get('');
    }

    public createChat(data: IChat) {
        return this.http.post('/', data);
    }
}

export default new ChatsAPI();
