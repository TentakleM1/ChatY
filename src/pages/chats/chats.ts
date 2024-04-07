import { Block } from '../../core/block';
import { template } from './chats.tmpl';
import LeftChats from '../../partials/leftChats/left-chats';
import RightChats from '../../partials/rightChats/rightChats';
import { ChatsController } from '../../core/controllers/ChatsController';
import Store from '../../core/store/Store';

export default class Chats extends Block {
  constructor(props: any) {
    super({
      styles: 'chats-page',
      children: {
        rightChats: new RightChats({}, ''),
      },
    });
    this.getData();
  }

  async getData() {
    await ChatsController.getChats();
    const chats: any = Store.getState().chats;
    this.children.leftChats =  new LeftChats(chats);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);

  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
