import ChatsAPI from "../api/ChatsApi";
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

}
