import { Block } from '../../core/block.ts';
import { template } from './left-chats.tmpl.ts';
import Button from '../button/button.ts';
import Input from '../input/input.ts';
import ChoiceChat from '../choiсe-chat-in-list/choice-chat-in-list.ts';

export default class LeftChats extends Block {
  constructor(data: Record<string, any>[]) {
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
        chats: data.map((chat: Record<string, any>) => {
          const { profile_name, messages, newMessage, img } = chat;
          const { message, date } = messages[messages.length - 1];
          return new ChoiceChat({
            url: profile_name,
            name: profile_name,
            dontIconChat: profile_name,
            iconChat: img,
            message,
            data: date,
            new: newMessage,
          });
        }),
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
