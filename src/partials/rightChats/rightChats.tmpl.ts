export const template = `<header class="header-messages-chat">
        <div class="header-profile-messages-chat">
            <div class="icon-profile">

            </div>
            <div class="name-message">
                <h3>
                    {{{name}}}
                </h3>
            </div>
        </div>
    <div class="header-setting-chat">
    <div class="setting-chat">
        <button id="add_user">добавить</button>
        <button id="delete_user">убрать</button>
        <button id="delete_chat">удалить</button>
    </div>
</div>
</header>
    <main class="messages">
        {{{messageChats}}}
        {{{plug}}}
    </main>
    {{{messageInputButton}}}
    <div id="popupChat" class="popup-chat">
        <div class="wrap-popup">
            <div class="wrap-close">
                <button id="close" class="close">
                </button>
            </div>
            <h3 id="popup_capital">Добавить пользвотеля</h3>
            <input id="popup_input" class="popup-input" type="text" />
            <button id="popup_button" class="popup-button" >Добавить</button>
        </div>
    <div>`;
