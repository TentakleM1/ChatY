import { Block } from '../../core/block';
import { template } from './plug.tmpl.ts';

export default class Plug extends Block {
    constructor() {
        super({
            id: 'plug',
            styles: 'plug'
        })
    }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}