export const template = 
    `<div class="chats-page">
        <div class="left-position-chats">
            <header class="header-wrap fBox"> 
                {{{buttonProfileChats}}}
                {{{inputChats}}}
            </header>
            <main class="chat-list">
                {{{choiсeChatInListChats}}}
            </main>
        </div>
        <div class="right-position-chat">
            {{{header-messages-chat-chats}}}
            <main class="messages">
                {{{dataChats}}}
                {{{messageChats}}}
            </main>
            {{{messagesInputButtonChats}}}
        </div>
    </div>`
