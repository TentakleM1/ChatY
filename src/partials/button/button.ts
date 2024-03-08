import { Block } from '../../core/block.ts';
import { button, buttonProfile } from './button.tmpl.ts';

export default class Button extends Block {
  constructor(props: Record<string, any>) {
    super(props);
  }

  render(): DocumentFragment {
    const typeButton = this.props.name;

    if (typeButton === 'button') {
      return this.compile(button, this.props);
    }
    return this.compile(buttonProfile, this.props);
  }
}
