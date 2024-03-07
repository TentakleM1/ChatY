import { Block } from "../../core/block";
import { template } from "./messageChat.tmpl"

export default class MessageChat extends Block {
    constructor(props: Record<string, any> = {}) {
        super(props)
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
