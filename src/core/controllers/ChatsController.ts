import ChatsAPI from "../api/ChatsApi";
import Store from "../store/Store";

export class ChatsController {

  static async create() {

  }

  static async getChats() {
    const chats = await ChatsAPI.getChats(); 
    Store.set('chats', chats); 
  }
}
