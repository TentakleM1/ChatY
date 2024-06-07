// @ts-nocheck
import { template } from './eddit.tmpl';
import Button from '../../partials/button/button';
import { Block } from '../../core/block';
import Input from '../../partials/input/input';
import { getForm } from '../../core/utils/getForm/getForm';
import { connect } from '../../core/utils/connect/connect';
import { ProfileController } from '../../core/controllers/ProfileController';
import { AuthController } from '../../core/controllers/AuthController';

async function onButton() {
  const info = {
    data: getForm()
  };

  if(info.data) {
    await ProfileController.changeUser(info as unknown as Record<string, string>);
  }
}

const buttonProfileEdit = [
  new Button({
    name: 'buttonProfile',
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    text: 'Сохранить',
    events: {
      click: () => onButton(),
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
      click: AuthController.logout,
    },
  }),
];

class Eddit extends Block {
  constructor(props: Record<string, string>) {
    super({
      styles: 'profile-page',
      children: {
        buttonProfileEdit,
        profileTypeInfo: Object.entries(props).map((info: [string, string]): Block => {
          return new Input({
          type: info[0],
          name:  info[0],
          value: info[1],
          selectorInput: 'search',
          selecrtorLable: 'search-lable',
          idForLable: info[0]
        })}),
      },

    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const mapStateToProps = (state: any) => {
  return {
    'login': state.user.login,
    'display_name': state.user.login,
    'email': state.user.email,
    'first_name': state.user.first_name,
    'second_name': state.user.second_name,
    'phone': state.user.phone,

  }
}
 
export default connect(mapStateToProps)(Eddit);
