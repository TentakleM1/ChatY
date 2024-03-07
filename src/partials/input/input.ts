import { Block } from '../../core/block';
import { template } from './input.tmpl';
import { validation } from '../../core/utils/validation/validation';

export default class Input extends Block {
    constructor(props: Record<string, any> = {}) {
        super({
            ...props,
            styles: 'input-wrap',
            events: {
                blur: (event: any) => {
                    const target = event.target
                    const validationResult = validation(target.name, target.value)
                     
                    if(validationResult.length != 0) {
                        alert(validationResult)
                    }
                },
            }
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
