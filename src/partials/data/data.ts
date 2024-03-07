import { Block } from "../../core/block";
import { template } from "./data.tmpl";

export default class Data extends Block {
    constructor(props: Record<string, any> = {}) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
