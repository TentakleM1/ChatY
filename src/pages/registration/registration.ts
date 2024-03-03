import Handlebars from "handlebars";
import { template } from './registration.tmpl.js';
import { button } from '../../partials/button/button.tmpl.js';

const buttonRegist: button = button({
    type: 'button',
    text: 'Зарегестрироваться',
    id: "btn", 
    background: 'background', 
    cursor: 'pointer'
})

const buttonLink: button = button({
    type: 'button',
    text: 'Войти',
    id: "link", 
    cursor: 'pointer',
    loc: '/messages'
})

export const registration = () => {
    return Handlebars.compile(template)({buttonRegist: buttonRegist, buttonLink: buttonLink})
}
