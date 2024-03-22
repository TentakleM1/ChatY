import { Block } from '../../core/block';
import { template } from './left-chats.tmpl';
import Button from '../button/button';
import Input from '../input/input';
import ChoiceChat from '../choiсe-chat-in-list/choice-chat-in-list';
import Store, { StoreEvents } from '../../core/store/Store';
import { connect } from '../../core/utils/connect/connect';
import { ChatsController } from '../../core/controllers/ChatsController';

class LeftChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'left-position-chats',
      children: {
        button: new Button({
          styles: 'button-profile-wrap',
          name: 'buttonProfile',
          text: 'Профиль >',
          type: 'button',
          selectorButton: 'button-profile',
          events: {
            click: () => window.location.href = '/profile',
          },

        }),
        input: new Input({
          name: 'search',
          type: 'text',
          placeholder: 'Поиск',
          idForLable: 'search',
          selectorInput: 'search',
          selecrtorLable: 'search-lable',
        }),
        chats: new ChoiceChat({ ...props }),
        // data.map((chat: Record<string, any>) => {
        //   const { profile_name, messages, newMessage, img } = chat;
        //   const { message, date } = messages[messages.length - 1];
        //   return new ChoiceChat({
        //     url: profile_name,
        //     name: profile_name,
        //     dontIconChat: profile_name,
        //     iconChat: img,
        //     message,
        //     data: date,
        //     new: newMessage,
        //   });
        // }), незабыть убрать
      },
    });

    Store.on(StoreEvents.Updated, () => {
      this.setProps(Store.getState());
    })

  }

  render() {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return { name: 'dima' }
}

export default connect(mapStateToProps)(LeftChats);
