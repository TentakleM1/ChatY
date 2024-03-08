import { Block } from '../../core/block.ts';
import { template } from './data.tmpl.ts';

export default class Data extends Block {
  constructor(props: Record<string, any> = {}) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
