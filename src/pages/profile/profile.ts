import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';

import Store, { StoreEvents } from "../../core/store/Store";

const buttonProfile = [
  new Button({
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    text: 'Изменить данные',
    events: {
      click: () => window.location.href = '/profile/eddit',
    },
  }),

  new Button({
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    text: 'Изменить пароль',
  }),

  new Button({
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing exit',
    text: 'Выйти',
    events: {
      click: () => window.location.href = '/login',
    },
  }),
];

export default class Profile extends Block {
  constructor(data: Record<string, string>) {
    super({
      styles: 'profile-page',
      login: data.login,
      children: {
        buttonProfile,
        profileInfo: Object.entries(data).map((info: [string, string]): Block => new ProfileTypeInfo({ type: info[0], info: info[1] })),
      },

    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
