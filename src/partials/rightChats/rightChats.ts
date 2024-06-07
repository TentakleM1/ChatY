// @ts-nocheck
import { Block } from '../../core/block.js';
import { template } from './rightChats.tmpl.js';
import MessageInputButton from '../messages-input-button/messages-input-button.js';
import MessageChat from '../message/messageChat.js';
import { connect } from '../../core/utils/connect/connect.js';
import isEqual from '../../core/utils/isEqual/isEqual.js';
import messagesController from '../../core/controllers/MessagesController.js';
import Store from '../../core/store/Store.js';
import { ChatsController } from '../../core/controllers/ChatsController.js';
import Plug from '../plug/plug.js';
import { ProfileController } from '../../core/controllers/ProfileController.js';

async function sendMessage(chatId, target, input) {
  if(target.id === 'send') {
    if(input.value !== '') {
      const message = input.value
      await messagesController.sendMessage(chatId, message)
      let messageList;
      
      setInterval(() => {
        messageList =  Store.getMessageList(chatId);
        Store.set('message', messageList);
        ChatsController.getChats();

      }, 1000)
      input.value = '';
    }
    return
  }
}

async function editPopupAndAddDeleteUser(id: string) {
  const popupChat: HTMLElement | null = document.getElementById('popupChat');
  const popupCapital: HTMLElement | null = document.getElementById('popup_capital');
  const popupInput: HTMLElement | null = document.getElementById('popup_input');
  const popupButton: HTMLElement | null = document.getElementById('popup_button');

  if(id === 'delete_chat') {

    await ChatsController.deleteChat();

  } else if(id === 'add_user') {

    popupChat.style.cssText += 'top: 0;';
    popupCapital.innerHTML = 'Добавить пользвотеля';
    popupButton.innerHTML = 'добавить';

  } else if(id === 'delete_user') {

    popupChat.style.cssText += 'top: 0;';
    popupCapital.innerHTML = 'Убрать пользвотеля';
    popupButton.innerHTML = 'убрать';

  } else if(id === "close") {

    popupChat.style.cssText += 'top: -1000px;';
    
  } else if(id === popupButton.id) {
    const users= popupInput.value;
    const chatId: Number = Number(Store.getState().chatId);
    if(users === '') return alert('введите id пользвотеля'); 
    const user = await ProfileController.searchUser(users);

    if(popupCapital.textContent === 'Добавить пользвотеля') {   
      ChatsController.addUserToChat(chatId, user[0].id);
      popupChat.style.cssText += 'top: -1000px;';
      popupInput.value = '';
    } 

    ChatsController.deleteUserInChat(chatId, user[0].id);
    popupChat.style.cssText += 'top: -1000px;';
    popupInput.value = '';

  }

}

class RightChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'right-position-chat',
      events: {
        click: (e) => {
          editPopupAndAddDeleteUser(e.target.id);        
        }
      },
      children: {
        plug: new Plug()
      },
    });
  }

  public componentDidUpdate(_oldProps: { [x: string]: any; }, _newProps: { [x: string]: any; }): boolean {
    if(!this.props.chatId) {
      delete this.children.messageInputButton;
      delete  this.children.messageChats;
        
      this.children.plug = new Plug();
    }
      if(!isEqual(_oldProps, _newProps)) {

        delete this.children.plug;

        this.children.messageChats = _newProps.message.map( (message) => {
          const date = new Date(message.time);
          if(_newProps.userId === message.user_id) {
            return new MessageChat({
              messageLeftOrRight: 'message-right',
              text: message.content,
              timeLeftOrRight: 'time-right',
              time: `${date.getHours()}:${date.getMinutes()}`,
              right: 'right',
            })
          } else {
            return new MessageChat({
              messageLeftOrRight: 'message-left',
              text: message.content,
              timeLeftOrRight: 'time-left',
              time: '20',
            })
          }
          
  
        });

        this.children.messageInputButton = new MessageInputButton({
          styles: 'messages-input-button',
          type: 'button',
          events: {
            click: (e: any) => {
              const { target } = e;
              const input: HTMLElement | null = document.getElementById('message');
              const chatId: Number = this.props.chatId;
              sendMessage(chatId, target, input);

            }
          }
        });

    }
    
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return {
    userId: state.user.id, 
    chatId: state.chatId,
    name: state.chatTitle,
    message: state.message || [],
  }
}

export default connect(mapStateToProps)(RightChats);
