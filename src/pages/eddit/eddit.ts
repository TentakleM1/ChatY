import { template } from "./eddit.tmpl";
import Button from "../../partials/button/button";
import { Block } from "../../core/block";
import Input from "../../partials/input/input";
import { getForm } from "../../core/utils/getForm/getForm";

const buttonProfileEdit = [
    new Button({
        name: 'buttonProfile', 
        selectorWrap: 'wrap-editing',
        selectorButton: 'editing',
        text: 'Сохранить',
        events: {
            click: getForm
        }}),
    new Button({
        name: 'buttonProfile',
        selectorWrap: 'wrap-editing',
        selectorButton: 'editing', 
        text: 'Изменить пароль'}),
    new Button({
        name: 'buttonProfile',
        selectorWrap: 'wrap-editing',
        selectorButton: 'editing exit', 
        text: 'Выйти',
        events: {
            click: () => window.location.href = '/login'
        }})  
]

export default class Eddit extends Block {
    constructor(data: Record<string, string>) {
        super({
            styles: 'profile-page',
            login: data.login,
            children: {
                buttonProfileEdit,
                profileTypeInfo: Object.entries(data).map((info: [string, string]): Block => {
                    return new Input({ 
                        type: info[0],
                        name: info[0],
                        value: info[1],
                        selectorInput: 'search',
                        selecrtorLable: 'search-lable',
                        idForLable: info[0],
                    })
                })
            }
            
        })
    }

    render(): DocumentFragment {
        return this.compile(template, this.props)
    }
}
