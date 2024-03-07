import { Block } from "../../core/block";
import { template } from "./chats.tmpl";
import LeftChats from "../../partials/leftChats/left-chats"
import RightChats from "../../partials/rightChats/rightChats";


export default class Chats extends Block {
    constructor(data: Record<string, string>[], local: string) {
        super({ styles: 'chats-page', children: {
            leftChats: new LeftChats(data),
            rightChats: new RightChats(data, local)
        }});
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
