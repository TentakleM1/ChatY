import { Block } from "../../core/block";
import { button, buttonProfile } from "./button.tmpl";

export default class Button extends Block {

    constructor(props: Record<string, any>) {
        super(props)
    }

    render(): DocumentFragment {
        const typeButton = this.props.name

        if(typeButton == 'button') {
            return this.compile(button, this.props)
        } else {
            return this.compile(buttonProfile, this.props)
        }    
    }
}
