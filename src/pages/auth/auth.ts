import { Block } from '../../core/block';
import { template } from './auth.tmpl';
import Button from '../../partials/button/button';
import Input from '../../partials/input/input';
import { getForm } from '../../core/utils/getForm/getForm';
import { ISigninData } from '../../core/api/AuthApi';
import AuthController from '../../core/controllers/AuthController';


export const authController = new AuthController();

function onButton() {
  const data: ISigninData = {
    data: getForm()
  };

  if(data) {
    authController.singin(data);
  }
}

const input = [
  new Input({
    idForLable: 'login',
    selectorInput: 'log',
    name: 'login',
    type: 'text',
    selecrtorLable: 'log-lable',
    placeholder: 'Логин',
    value: 'Oleg',
  }),
  new Input({
    idForLable: 'password',
    selectorInput: 'log',
    name: 'password',
    type: 'password',
    selecrtorLable: 'log-lable',
    placeholder: 'Пароль',
    value: 'QWEasd123',
  }),
];

const button = [
  new Button({
    name: 'button',
    text: 'Авторизоваться',
    events: {
      click: onButton,
    },
  }),
  new Button({
    name: 'buttonProfile',
    text: 'Нет Аккаунта ?',
    events: {
      click: () => window.location.href = '/signup',
    },
  }),
];

export default class Auth extends Block {
  constructor() {
    super({
      children: {
        input,
        button,
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
