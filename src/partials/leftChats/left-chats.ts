import { Block } from '../../core/block';
import { template } from './left-chats.tmpl';
import Button from '../button/button';
import Input from '../input/input';
import ChoiceChat from '../choiсe-chat-in-list/choice-chat-in-list';
import { ChatsController } from '../../core/controllers/ChatsController';
import { connect } from '../../core/utils/connect/connect';
import PopUp, { showPopUp } from '../popup/popup';
import { getForm } from '../../core/utils/getForm/getForm';
import isEqual from '../../core/utils/isEqual/isEqual';
import Store from '../../core/store/Store';
import messagesController  from '../../core/controllers/MessagesController';

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

async function message(id: string) {
  const token = await ChatsController.getToken(id);
  messagesController.connect(id, token)
  const messageList = Store.getMessageList(id);
  Store.set('message', messageList)
}

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
        chats: props.chats.map((chat) => {
          return new ChoiceChat({
            id: chat.id,
            name: chat.title,
            message: chat.last_message ? chat.last_message.content : 'no message',
            new: chat.unread_count,
            events: {
              click: (e) => {
                const chatId = e.currentTarget.id;
                message(chatId);
              }
            }
          })
        })
      },
    });
  }

  public componentDidUpdate(_oldProps: { [x: string]: any; }, _newProps: { [x: string]: any; }): boolean {

    if(!isEqual(_oldProps, _newProps)) {
      this.children.chats = _newProps.chats.map((chat) => {
        return new ChoiceChat({
          id: chat.id,
          name: chat.title,
          message: chat.last_message ? chat.last_message.content : 'no message',
          new: chat.unread_count,
          events: {
            click: (e) => {
              const chatId = e.currentTarget.id;
              message(chatId);
            }
          }
        })
      })
    }
  }

  render() {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return {
    chats: state.chats || []
  };
}

export default connect(mapStateToProps)(LeftChats);
