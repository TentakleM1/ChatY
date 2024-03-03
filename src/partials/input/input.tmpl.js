import Handlebars from "handlebars"

export const input = ({type, name, value, selectorInput, selecrtorLable, idForLable, placeholder}) => {
    return Handlebars.compile(
        `<div class="input-wrap">
            <input id="{{idForLable}}" class="input {{selectorInput}}" name="{{name}}" value="{{value}}" type="{{type}}" autocomplete="off" placeholder=" " />
            <label class="lable {{selecrtorLable}}" for="{{idForLable}}">{{placeholder}}</label>
        </div>`
    )({type, name, value, selectorInput, selecrtorLable, idForLable, placeholder})
}
