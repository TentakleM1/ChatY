import { Block } from '../../core/block.ts';
import { template } from './choiсe-chat-in-list.tmpl.ts';

export default class ChoiceChat extends Block {
  constructor(props: Record<string, any> = {}) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
