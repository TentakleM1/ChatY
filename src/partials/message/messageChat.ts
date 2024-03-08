import { Block } from '../../core/block.ts';
import { template } from './messageChat.tmpl.ts';

export default class MessageChat extends Block {
  constructor(props: Record<string, any> = {}) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
