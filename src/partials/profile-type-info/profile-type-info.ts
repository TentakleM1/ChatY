// @ts-nocheck
import { Block } from '../../core/block.ts';
import { template } from './profile-type-info.tmpl.ts';

export default class ProfileTypeInfo extends Block {
  constructor(props: Record<string, any>) {
    super(props);
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
