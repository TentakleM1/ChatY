// @ts-nocheck
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
      click: () => {
        showPopUp('popup');
      },
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
  await messagesController.connect(id, token)
  let messageList;

  const chatTitle = Store.getState().chats.filter(chat => {
    if(chat.id === Number(id)) {
      return chat
    }
  })[0].title;

  setTimeout(() => {
    messageList = Store.getMessageList(id);
    Store.set('message', messageList)
    Store.set('chatId', id)
    Store.set('chatTitle', chatTitle)
  }, 500)
}

 class LeftChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'left-position-chats',
      children: {

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
        }),
        
        popup: new PopUp({ id: 'popup', capital: 'Новый чат', type: 'text', text: 'Создать', click: onButton, idForLable: 'popup-text'}),
        button,
        input: new Input({
          name: 'search',
          type: 'text',
          placeholder: 'Поиск',
          idForLable: 'search',
          selectorInput: 'search',
          selecrtorLable: 'search-lable',
        }),

      },
    });
    console.log(props)
  }

  public componentDidUpdate(_oldProps: { [x: string]: any; }, _newProps: { [x: string]: any; }): boolean {
    console.log('work')
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
  console.log(state)
  return {
    chats: state.chats || []
  };
}

export default connect(mapStateToProps)(LeftChats);
