import { Block } from '../../core/block.ts';
import { template } from './rightChats.tmpl.ts';
import MessageInputButton from '../messages-input-button/messages-input-button.ts';
import MessageChat from '../message/messageChat.ts';
import { connect } from '../../core/utils/connect/connect.js';
import isEqual from '../../core/utils/isEqual/isEqual.js';
import messagesController from '../../core/controllers/MessagesController.js';
import Store from '../../core/store/Store.js';
import { ChatsController } from '../../core/controllers/ChatsController.js';

async function sendMessage(chatId, target, input) {
  if(target.id === 'send') {
    if(input.value !== '') {
      const message = input.value
      await messagesController.sendMessage(chatId, message)
      let messageList;
      setTimeout(() => {
        messageList =  Store.getMessageList(chatId);
        Store.set('message', messageList);
        ChatsController.getChats();

      }, 500)
      input.value = '';
    }
    return
  }
}

class RightChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'right-position-chat',
      children: {
        messageInputButton: new MessageInputButton({
          styles: 'messages-input-button',
          type: 'button',
          events: {
            click: (e) => {
              const { target } = e;
              const input = document.getElementById('message');
              const chatId = this.props.chatId;
              sendMessage(chatId, target, input);
            }
          }
        }),
      },
    });
  }

  public componentDidUpdate(_oldProps: { [x: string]: any; }, _newProps: { [x: string]: any; }): boolean {
    
    if(!isEqual(_oldProps, _newProps)) {
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
        

      })
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
    message: state.message || [],
  }
}

export default connect(mapStateToProps)(RightChats);
