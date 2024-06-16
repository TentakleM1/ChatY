// @ts-nocheck
import { Block } from '../../core/block.ts';
import { template } from './input.tmpl.ts';
import { validation } from '../../core/utils/validation/validation.ts';

export default class Input extends Block {
  constructor(props: Record<string, any> = {}) {
    super({
      ...props,
      styles: 'input-wrap',
      events: {
        blur: (event: Event) => {
          const { target } = event;
          const validationResult = validation(target.name, target.value);

          if (validationResult.length != 0) {
            alert(validationResult);
          }
        },
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
