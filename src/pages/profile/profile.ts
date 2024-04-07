import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';
import { AuthController } from '../../core/controllers/AuthController';
import { connect } from '../../core/utils/connect/connect';
import { router } from '../../core/router/router';
import { Routes } from '../../../main';


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
      click: () => router.go(Routes.ProfileEddit),
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

class Profile extends Block {
  constructor(props: Record<string, string>) {
    super({
      styles: 'profile-page',
      login: props['Логин'],
      children: {
        buttonProfile,
        profileInfo: Object.entries(props).map((info: [string, string]): Block => new ProfileTypeInfo({ type: info[0], info: info[1] })),
      },// dont down props!
    });
    console.log(props)
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
 
export default connect(mapStateToProps)(Profile);
