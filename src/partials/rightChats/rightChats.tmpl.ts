export const template = `<header class="header-messages-chat">
        <div class="header-profile-messages-chat">
            <div class="icon-profile">

            </div>
            <div class="name-message">
                <h3>
                    {{name}}
                </h3>
            </div>
        </div>
    <div class="header-setting-chat">
    <div class="setting-chat">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</div>
</header>
    <main class="messages">
        {{{dataChats}}}
        {{{messageChats}}}
    </main>
    {{{messageInputButton}}}`
