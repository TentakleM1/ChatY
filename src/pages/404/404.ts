import { Block } from '../../core/block';
import Button from '../../partials/button/button';
import { template } from './404.tmpl';

export default class ErrorCode extends Block {
  constructor() {
    super({
      children: {
        button: new Button({
          name: 'buttonProfile',
          text: 'Не туда попали',
          events: {
            click: (): string => window.location.href = '/chats',
          },
        }),
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
