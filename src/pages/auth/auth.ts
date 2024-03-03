import Handlebars from "handlebars";
import { template } from './auth.tmpl.js';
import { button } from '../../partials/button/button.tmpl.js';

const buttonAuth: button = button({
    id: 'btn',
    type: 'button',
    text: 'Авторизоваться',
    background: 'background', 
    cursor: 'pointer'
})

const buttonLink: button = button({
    id: 'link',
    type: 'button',
    text: 'Нет аккаунта?',
    cursor: 'pointer',
    loc: '/registration'
})

export const auth = () => {

    

    return Handlebars.compile(template)({buttonAuth: buttonAuth, buttonLink: buttonLink})
}
