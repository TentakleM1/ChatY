// @ts-nocheck
import { Block } from '../../core/block';
import { template } from './chats.tmpl';
import LeftChats from '../../partials/leftChats/left-chats';
import RightChats from '../../partials/rightChats/rightChats';
import { ChatsController } from '../../core/controllers/ChatsController';


export default class Chats extends Block {
  constructor() {
    super({
      styles: 'chats-page',
      events: {
        keydown: (e: Event) => {
          const keyName = e.key;
          if(keyName !== 'Enter') return;

          e.preventDefault();
        }
      },
      children: {
        rightChats: new RightChats(),
        leftChats: new LeftChats({}),
      },
    });
    this.loadChats();
  }

  async loadChats() {
    await ChatsController.getChats();
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}