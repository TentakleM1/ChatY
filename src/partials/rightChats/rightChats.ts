import { Block } from '../../core/block.ts';
import { template } from './rightChats.tmpl.ts';
import MessageInputButton from '../messages-input-button/messages-input-button.ts';
import MessageChat from '../message/messageChat.ts';
import { connect } from '../../core/utils/connect/connect.js';
import isEqual from '../../core/utils/isEqual/isEqual.js';

class RightChats extends Block {
  constructor(props: Record<string, any>[]) {
    super({
      styles: 'right-position-chat',
      children: {
        messageInputButton: new MessageInputButton({
          styles: 'messages-input-button',
          type: 'button',
          events: {
            click: (e: any) => {
              const { target } = e;
              if (target.id === 'send') {
                if (document.querySelectorAll('input')[1].value) {
                  console.log({ message: document.querySelectorAll('input')[1].value });
                }
              }
            },
          },
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
  console.log(state)
  return {
    userId: state.user.id, 
    message: state.message || []
  }
}

export default connect(mapStateToProps)(RightChats);
