import ChatsAPI, { IChat } from "../api/ChatsApi";
import Store from "../store/Store";

export class ChatsController {

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

  static async getToken(id: number) {
    return ChatsAPI.getToken(id);
  }

  static async deleteChat() {
    try {
      const info = {
        data: { chatId: Number(Store.getState().chatId) }
      };
      await ChatsAPI.deleteChat(info);
      await this.getChats();
      Store.set('titleChat', '');
      Store.set('chatId', undefined);
    } catch (e) {
      console.log(e);
    }
  }

  static async addUserToChat(id: number, users: number) {
    try {
      const info = {
        data: {
          users: [users],
          chatId: id
        }
      }
      await ChatsAPI.addUserToChat(info);
    } catch(e) {
      console.log(e);
    }
  }

  static async deleteUserInChat(id: number, users: number) {
    try {
      const info = {
        data: {
          users: [users],
          chatId: id
        }
      }

      await ChatsAPI.deleteUserInChat(info);

    } catch (e) {
      console.log(e);
    }
  }

  static async uploadChatAvatar(id: number, file) {
    try {
      const data = new FormData();
      data.set('chatId', id);
      data.append('avatar', file);

      await ChatsAPI.uploadChatAvatar({data});
      
    } catch (e) {
      console.log(e);
    }
  }


}
