import ChatsAPI from "../api/ChatsApi";

const chatsApi = new ChatsAPI()

export default class ChatsController {
    public getChats() {
        chatsApi.getChats()
            .then(data => JSON.parse(data))
            .then(item => console.log(item))
    }
}
