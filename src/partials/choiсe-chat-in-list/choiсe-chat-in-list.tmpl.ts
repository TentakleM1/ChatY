export const template = `<div class="chat-wrap" onclick="window.location.href='/{{url}}'">
            <div class="icon-chat">
                <img class="icon" src="{{iconChat}}" alt="">
            </div>
            <div class="name-info">
                <div class="name-chat">
                    <h3>
                        {{name}}
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
                    <div class="data-wrap">
                        <span class="data">{{data}}</span>
                    </div>
                </div>
                <div class="quantity-message">
                    <span>
                        {{new}} 
                    </span>
                </div>
            </div>      
        </div>`
