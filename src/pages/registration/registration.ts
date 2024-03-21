import { Block } from '../../core/block';
import { template } from './registration.tmpl';
import Button from '../../partials/button/button';
import { getForm } from '../../core/utils/getForm/getForm';
import Input from '../../partials/input/input';
import { ISignupData } from '../../core/api/AuthApi';
import AuthController from '../../core/controllers/AuthController';

function onButton() {
  const authController = new AuthController();
  const data: ISignupData = {
    data: getForm()
  };

  if(data) {
    authController.singup(data);
  } else {
    return false
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
    idForLable: 'email',
    selectorInput: 'log',
    name: 'email',
    type: 'email',
    selecrtorLable: 'log-lable',
    placeholder: 'Почта',
    value: 'oleg@mail.ru',
  }),
  new Input({
    idForLable: 'first_name',
    selectorInput: 'log',
    name: 'first_name',
    type: 'text',
    selecrtorLable: 'log-lable',
    placeholder: 'Имя',
    value: 'Oleg',
  }),
  new Input({
    idForLable: 'second_name',
    selectorInput: 'log',
    name: 'second_name',
    type: 'text',
    selecrtorLable: 'log-lable',
    placeholder: 'Фамилия',
    value: 'Isaev',
  }),
  new Input({
    idForLable: 'phone',
    selectorInput: 'log',
    name: 'phone',
    type: 'tel',
    selecrtorLable: 'log-lable',
    placeholder: 'Телефон',
    value: '89534653737',
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
  new Input({
    idForLable: 'repitPassword',
    selectorInput: 'log',
    name: 'repitPassword',
    type: 'password',
    selecrtorLable: 'log-lable',
    placeholder: 'Повторить пароль',
    value: 'QWEasd123',
  }),
];

const button = [
  new Button({
    name: 'button',
    text: 'Зарегестрироваться',
    events: {
      click: onButton,
    },
  }),
  new Button({
    name: 'buttonProfile',
    text: 'Войти',
    events: {
      click: () => window.location.href = '/',
    },
  }),
];

export default class Registration extends Block {
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
