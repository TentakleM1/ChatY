import Handlebars from "handlebars";
import { template } from "./chats.tmpl.js";

import { buttonProfile } from '../../partials/button/button.tmpl.js';
import { input } from '../../partials/input/input.tmpl.js'
import { choiсeChatInList } from '../../partials/choiсe-chat-in-list/choiсe-chat-in-list.tmpl.js';
import { headerMessagesChat } from '../../partials/header-messages-chat/header-messages-chat.tmpl.js';
import { data } from '../../partials/data/data.tmpl.js';
import { messageChat } from '../../partials/message/messageChat.tmpl.js';
import { messagesInputButton } from '../../partials/messages-input-button/messages-input-button.tmpl.js';

type Messages = {
    author: string;
    message: string;
    date: string;
}

type Chat = {
    profile_name: string;
    messages: any[];
    newMessage: number;
}

const buttonProfileChats: buttonProfile = buttonProfile({
    selectorWrap: 'button-profile-wrap',
    selectorButton: 'button-profile',
    type: 'button',
    text: 'Профиль >',
    id: 'link',
    loc: '/profile'
})

const inputChats: input = input({
    type: 'text',
    name: 'search',
    selectorInput: 'search',
    selecrtorLable: 'searchLable',
    idForLable: 'search',
    placeholder: 'Поиск'
})



const dataChats: data = data({
    data: '19 Июня'
})


const messagesInputButtonChats: messagesInputButton = messagesInputButton({
    type: 'button'
})

export const chats = (chats: any[], profile: string) => {
    let messageChats

    const headerMessagesChatChats: headerMessagesChat = headerMessagesChat({
        nameMessage: profile
    })

    const choiсeChatInListChats = chats
        .map((chat: Chat) => {
            const { profile_name, messages, newMessage} = chat
            return choiсeChatInList({
                    url: profile_name,
                    iconChat: '',
                    nameChat: profile_name,
                    message: messages[0].message,
                    time: '10:49',
                    quantity: newMessage
            })
        })

        if(profile) {
            let messages

            chats.forEach(chat => {
                if(chat.profile_name === profile) {
                    messages = chat.messages
                }
            }) 
            
            messageChats = messages
                .map((messageChatProfile: Messages) => {

                    const { author, message, date } = messageChatProfile

                    if(author === 'you') {
                        return messageChat({
                            right: 'right',
                            messageLeftOrRight: 'message-right',
                            text: message,
                            timeLeftOrRight: 'time-right',
                            time: date
                        })
                    }

                    return messageChat({
                        messageLeftOrRight: 'message-left',
                        text: message,
                        timeLeftOrRight: 'time-left',
                        time: date
                    })
                })

        }
        
    return Handlebars.compile(template)({
        buttonProfileChats: buttonProfileChats,
        inputChats: inputChats,
        choiсeChatInListChats: choiсeChatInListChats,
        headerMessagesChatChats: headerMessagesChatChats,
        dataChats: dataChats,
        messageChats: messageChats,
        messagesInputButtonChats: messagesInputButtonChats
    })
}
