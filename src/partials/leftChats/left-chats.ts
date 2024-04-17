import { Block } from '../../core/block';
import { template } from './left-chats.tmpl';
import Button from '../button/button';
import Input from '../input/input';
import ChoiceChat from '../choiсe-chat-in-list/choice-chat-in-list';
import { ChatsController } from '../../core/controllers/ChatsController';
import { connect } from '../../core/utils/connect/connect';
import PopUp, { closePopup, showPopUp } from '../popup/popup';
import { getForm } from '../../core/utils/getForm/getForm';

async function onButton() {
  const info = {
    data: {
      title: getForm('popup-text').message
    }
  }

  if(info.data) {
    await ChatsController.createChat(info);
  }
}

const button = [
  new Button({
    styles: 'button-profile-wrap',
    name: 'buttonProfile',
    text: 'Новый чат',
    type: 'button',
    selectorButton: 'button-profile',
    events: {
      click: showPopUp,
    },

  }),
  new Button({
    styles: 'button-profile-wrap',
    name: 'buttonProfile',
    text: 'Профиль >',
    type: 'button',
    selectorButton: 'button-profile',
    events: {
      click: () => window.location.href = '/profile',
    },

  })
]

 class LeftChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'left-position-chats',
      children: {
        popup: new PopUp({capital: 'Новый чат', type: 'text', text: 'Создать', click: onButton, idForLable: 'popup-text'}),
        button,
        input: new Input({
          name: 'search',
          type: 'text',
          placeholder: 'Поиск',
          idForLable: 'search',
          selectorInput: 'search',
          selecrtorLable: 'search-lable',
        }),
        chats: Object.entries(props).map((chat) => {
          return new ChoiceChat({
            name: chat[1].title,
            message: chat[1].last_message,
            new: chat[1].unread_count
          })
        })
      },
    });
  }

  public componentDidUpdate(_oldProps: { [x: string]: any; }, _newProps: { [x: string]: any; }): boolean {
    
  }

  render() {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return state.chats;
}

export default connect(mapStateToProps)(LeftChats);
