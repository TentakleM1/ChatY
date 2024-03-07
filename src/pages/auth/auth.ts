import { Block } from '../../core/block';
import { template } from './auth.tmpl';
import Button from '../../partials/button/button';
import Input from '../../partials/input/input';
import { getForm } from '../../core/utils/getForm/getForm';

const input = [
    new Input({
        idForLable: 'login',
        selectorInput: 'log',
        name: 'login',
        type: 'text',
        selecrtorLable: 'log-lable',
        placeholder: 'Логин',
        value: 'Oleg'
    }),
    new Input({
        idForLable: 'password',
        selectorInput: 'log',
        name: 'password',
        type: 'password',
        selecrtorLable: 'log-lable',
        placeholder: 'Пароль',
        value: 'QWEasd123'
    })
];

const button = [ 
    new Button({name: 'button', text: 'Авторизоваться', events: {
        click: getForm
    }}),
    new Button({name: 'buttonProfile', text: 'Нет Аккаунта ?', events: {
        click: () => window.location.href = '/registration'
    }}) 
];

export default class Auth extends Block {
    constructor() {
        super({children: {
            input,
            button
        }
        });
    }

    render(): DocumentFragment {
        return this.compile(template, this.props);
    }
}
