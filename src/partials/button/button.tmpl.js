import Handlebars from "handlebars"

export const button = ({id, loc, type, text, background, cursor}) => { 
    return Handlebars.compile(
        `<button id="{{id}}" class="button {{background}} {{cursor}}" data-next-location="{{loc}}" type="{{type}}">
            {{ text }}
        </button>`
    )({id, type, loc, text, background, cursor}) }

export const buttonProfile =  ({type, loc, text, id, selectorButton, selectorWrap}) => { 
    return Handlebars.compile(
        `<div class="{{selectorWrap}}">
            <button id="{{id}}" class="{{selectorButton}}" data-next-location="{{loc}}" type="{{type}}" >{{text}}</button>
        </div>`
    )({type, loc, text, id, selectorButton, selectorWrap}) }
