// @ts-nocheck
import { Block } from '../../core/block.ts';
import { template } from './messages-input-button.tmpl.ts';

export default class MessageInputButton extends Block {
  constructor(props: Record<string, any> = {}) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
