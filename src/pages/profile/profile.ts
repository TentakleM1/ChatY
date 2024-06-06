import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';
import { AuthController } from '../../core/controllers/AuthController';
import { connect } from '../../core/utils/connect/connect';
import { router } from '../../core/router/router';
import { Routes } from '../../../main';
import PopUp, { showPopUp } from '../../partials/popup/popup';
import { ProfileController } from '../../core/controllers/ProfileController';


async function onButtonExit() {
  try {
    await AuthController.logout(); 
  } catch(e) {
    console.log(e);
  }
}

async function avatarOrPassword() {
  const input = document.querySelector('input');

  const file = input.files[0]

  await ProfileController.changeAvatar(file);

}

function editPopup() {
  const element = event?.target;
  const elementId = element.id

  let mouseEvent;
  const elementSelector = 'data-popup';

  if(elementId === 'changePassword button') {
    showPopUp('popup')
    return {id: 'popup', capital: 'Поменять пароль', type: 'password', text: 'Изменить'}
  }
  //исправить баг
  if(element.hasAttribute(elementSelector)) {
    mouseEvent = event.type;

    if(mouseEvent === 'click') {
      showPopUp('popup')
      return {id: 'avatar', capital: 'Поменять аватар', type: 'file', text: 'Изменить'}
    }

  }

}

const buttonProfile = [
  new Button({
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    text: 'Изменить данные',
    events: {
      click: () => router.go(Routes.ProfileEddit),
    },
  }),

  new Button({
    id: 'changePassword',
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
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
      avatar: props.avatar,
      styles: 'profile-page',
      login: props['Логин'],
      events: {
        click: () => {
          this.children.popup.setProps(editPopup())
        },

      },
      children: {
        buttonProfile,
        profileInfo: Object.entries(props.user).map((info: [string, string]): Block => new ProfileTypeInfo({ type: info[0], info: info[1] })),
        popup: new PopUp({id: 'popup', capital: 'Поменять пароль', type: 'password', text: 'Изменить', click: avatarOrPassword})
      },
    });

  }
  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return {
    user: {
      'Логин': state.user.login,
      'Почта': state.user.email,
      'Имя': state.user.first_name,
      'Фамилия': state.user.second_name,
      'Телефон': state.user.phone,
    },
    avatar: state.user.avatar
  }
}
 
export default connect(mapStateToProps)(Profile);
