import { Block } from '../../core/block';
import { template } from './chats.tmpl';
import LeftChats from '../../partials/leftChats/left-chats';
import RightChats from '../../partials/rightChats/rightChats';
import Store, { StoreEvents } from '../../core/store/Store';

const store = new Store();

export default class Chats extends Block {
  constructor(data: Record<string, string>[], local: string) {
    super({
      styles: 'chats-page',
      children: {
        leftChats: new LeftChats(data),
        rightChats: new RightChats(data, local),
      },
    });

    store.on(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
