import Handlebars from "handlebars"

export const messageChat = ({right, messageLeftOrRight, text, timeLeftOrRight, time}) => {
    return Handlebars.compile(
        `<div class="message-wrap {{right}}">
            <div class="message {{messageLeftOrRight}}">
                <p>
                    {{text}}
                </p>
                <span class="time {{timeLeftOrRight}}">
                    <svg class="{{time-left-or-right}}" width="13" height="8" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33301)" stroke="#3369F3"/>
                        <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#3369F3"/>
                        <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#3369F3"/>
                    </svg>
                    {{time}}
                </span> 
            </div>
        </div>`
    )({right, messageLeftOrRight, text, timeLeftOrRight, time})
}
