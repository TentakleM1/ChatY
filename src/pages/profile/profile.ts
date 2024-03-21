import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';

import store, { StoreEvents } from "../../core/store/Store";
import { connect } from '../../core/utils/connect/connect';
import { authController } from '../auth/auth';


const mapStateToProps = (state: any) => ({
  login: state.user?.login,
  first_name: state.user?.first_name,
  second_name: state.user?.second_name,
  phone: state.user?.phone,
  email: state.user?.email,
  display_name: state.user?.display_name,
  avatar: state.user?.avatar,
});

async function onButtonExit() {
    try {
    await authController.logout();
  } catch(e) {
    console.log(e);
  }
}

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
      click: onButtonExit,
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

    store.on(StoreEvents.Updated, () => {
      this.setProps(store.getState())
    });

  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

connect(state => ( { user: state.user || {} } ) );
export const ProfilePage = connect(mapStateToProps)(Profile);
