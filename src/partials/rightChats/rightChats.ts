import { Block } from '../../core/block.ts';
import { template } from './rightChats.tmpl.ts';
import MessageInputButton from '../messages-input-button/messages-input-button.ts';
import MessageChat from '../message/messageChat.ts';

// function chats(data: Record<string, any>, local: string): MessageChat[] {
//   const messageChats: MessageChat[] = [];

//   data.forEach((chat: Record<string, any>) => {
//     if (chat.profile_name === local.split('/').join('')) {
//       chat.messages.forEach((item: Record<string, any>) => {
//         if (item.author === 'you') {
//           messageChats.push(new MessageChat({
//             right: 'right', messageLeftOrRight: 'message-right', text: item.message, timeLeftOrRight: 'time-right', time: item.date,
//           }));
//         } else {
//           messageChats.push(new MessageChat({
//             messageLeftOrRight: 'message-left',
//             text: item.message,
//             timeLeftOrRight: 'time-left',
//             time: item.date,
//           }));
//         }
//       });
//     }
//   });

//   return messageChats;
// }

export default class RightChats extends Block {
  constructor(data: Record<string, any>, local: string) {
    super({
      styles: 'right-position-chat',
      children: {
        messageChats: new MessageChat({
                      messageLeftOrRight: 'message-left',
                      text: 'hi',
                      timeLeftOrRight: 'time-left',
                      time: '20',
                    }),
        // chats(data, local),
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

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
