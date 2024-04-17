import { template } from './profile.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import ProfileTypeInfo from '../../partials/profile-type-info/profile-type-info';
import { AuthController } from '../../core/controllers/AuthController';
import { connect } from '../../core/utils/connect/connect';
import { router } from '../../core/router/router';
import { Routes } from '../../../main';
import PopUp, { showPopUp } from '../../partials/popup/popup';


async function onButtonExit() {
  try {
    await AuthController.logout(); 
  } catch(e) {
    console.log(e);
  }
}

function editAvatar() {
  const element = event?.target;
  let mouseEvent;
  const elementSelector = 'data-popup';
  //исправить баг
  if(element.hasAttribute(elementSelector)) {
    const elementPopup = document.querySelector(`[${elementSelector}]`)
    mouseEvent = event.type;

    if(mouseEvent === 'mouseover') {
      elementPopup.style.background = '#0f0f0f56';
      elementPopup.childNodes[1].append('Поменять аватар');
    } else {
      elementPopup.childNodes[1].innerHTML = '';
      elementPopup.style.background = '';
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
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    text: 'Изменить пароль',
    events: {
      click: showPopUp
    }
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
      events: {
        mouseover: editAvatar,
        mouseout: editAvatar,

      },
      children: {
        buttonProfile,
        profileInfo: Object.entries(props).map((info: [string, string]): Block => new ProfileTypeInfo({ type: info[0], info: info[1] })),
        popup: new PopUp({capital: 'Поменять пароль', type: 'password', text: 'Изменить'})
      },
    });
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
