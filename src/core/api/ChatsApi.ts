// @ts-nocheck
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

    async getToken(id: number): Promise<string> {
        const response = await this.http.post(`/token/${id}`);

        return response.token;
    }

    async deleteChat(data) {
        return this.http.delete('/', data);
    }

    async addUserToChat(data) {
        return this.http.put('/users', data);
    }

    async deleteUserInChat(data) {
        return this.http.delete('/users', data);
    }
    
}

export default new ChatsAPI();
