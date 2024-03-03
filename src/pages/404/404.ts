import Handlebars from "handlebars";
import { template } from './404.tmpl.js';
import { button } from '../../partials/button/button.tmpl.js';

const buttonBack: button = button({
    type: 'button',
    text: 'Назад к чатам',
    url: "/messages", 
    cursor: 'pointer'
})

export const error = () => {
    return Handlebars.compile(template)({buttonBack: buttonBack})
}
