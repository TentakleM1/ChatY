import ChatsAPI, { IChat } from "../api/ChatsApi";
import Store from "../store/Store";

export class ChatsController {

  static async create() {

  }

  static async getChats() {
    try {
      const chats = await ChatsAPI.getChats(); 
      Store.set('chats', chats); 
    } catch (e) {
      console.log(e);
    }
  }

  static async createChat(data: IChat) {
    try {
      await ChatsAPI.createChat(data);
      await this.getChats();
    } catch (e) {
      console.log(e)
    }
  }

}
