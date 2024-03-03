import Handlebars from "handlebars"

export const choiсeChatInList = ({url, iconChat, nameChat, message, time, quantity}) => {
    return Handlebars.compile(
        `<div class="chat-wrap" onclick="window.location.href='/{{url}}'">
            <div class="icon-chat">
                <img class="icon" src="{{iconChat}}" alt="">
            </div>
            <div class="name-info">
                <div class="name-chat">
                    <h3>
                        {{nameChat}}
                    </h3>
                </div>
                <div class="info-body">
                    <p>
                        {{message}}
                    </p>
                </div>
            </div>
            <div class="time-quantity">
                <div class="time-message">
                    {{time}}
                </div>
                <div class="quantity-message">
                    <span>
                        {{quantity}} 
                    </span>
                </div>
            </div>      
        </div>`
    )({url, iconChat, nameChat, message, time, quantity})
}  
