import { Block } from '../../core/block';
import { template } from './choiсe-chat-in-list.tmpl';

export default class ChoiceChat extends Block {
  constructor(props: Record<string, any> = {}) {
    super({...props});
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

