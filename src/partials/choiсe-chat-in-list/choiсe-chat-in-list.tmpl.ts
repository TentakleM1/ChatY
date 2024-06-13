export const template = `<main class="chat-wrap" data-id="{{chatId}}">
            <div class="icon-chat">
                <img class="icon" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}" alt="{{dontIconChat}}">
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
        </main>`;
