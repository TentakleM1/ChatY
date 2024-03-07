import { Block } from "../../core/block";
import { template } from "./profile-type-info.tmpl";

export default class ProfileTypeInfo extends Block {
    constructor(props: Record<string, any>) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
