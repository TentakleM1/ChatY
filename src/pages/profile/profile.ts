import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';
import { AuthController } from '../../core/controllers/AuthController';
import { connect } from '../../core/utils/connect/connect';
import Store, { StoreEvents } from '../../core/store/Store';


async function onButtonExit() {
  try {
    await AuthController.logout(); 
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
  constructor(props: Record<string, string>) {
    super({
      styles: 'profile-page',
      login: props['Логин'],
      children: {
        buttonProfile,
        profileInfo: Object.entries(props).map((info: [string, string]): Block => new ProfileTypeInfo({ type: info[0], info: info[1] })),
      },
    });

    Store.on(StoreEvents.Updated, () => {
      this.setProps(Store.getState());
    })
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return {
    'Логин': state.user.login,
    'Почта': state.user.email,
    'Имя': state.user.first_name,
    'Фамилия': state.user.second_name,
    'Телефон': state.user.phone,

  }
}
 
export const ProfilePage = connect(mapStateToProps)(Profile);
