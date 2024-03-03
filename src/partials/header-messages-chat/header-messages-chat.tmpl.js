import Handlebars from "handlebars"

export const headerMessagesChat = ({nameMessage}) => {
    return Handlebars.compile(
        `<header class="header-messages-chat">
            <div class="header-profile-messages-chat">
                <div class="icon-profile">

                </div>
                <div class="name-message">
                    <h3>
                        {{nameMessage}}
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
        </header>`
    )({nameMessage})
}
