export const template = 
    `<div class="chats-page">
        <div class="leftPositionChats">
            <header class="header-wrap fBox"> 
                {{{buttonProfileChats}}}
                {{{inputChats}}}
            </header>
            <main class="chat-list">
                {{{choiсeChatInListChats}}}
            </main>
        </div>
        <div class="rightPositionChat">
            {{{headerMessagesChatChats}}}
            <main class="messages">
                {{{dataChats}}}
                {{{messageChats}}}
            </main>
            {{{messagesInputButtonChats}}}
        </div>
    </div>`
