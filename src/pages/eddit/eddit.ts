import Handlebars from "handlebars";

import { template } from "./eddit.tmpl";
import { buttonProfile } from '../../partials/button/button.tmpl';
import { input } from '../../partials/input/input.tmpl'

import { Profile } from "../profile/profile";

const buttonProfileEdit: buttonProfile = buttonProfile({
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    type: 'button',
    text: 'Сохранить',
    id: 'btn'
})
const buttonProfileEditPassword: buttonProfile = buttonProfile({
    type: 'button',
    text: 'Изменить пароль',
    url: "", 
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    cursor: 'pointer'
})
const buttonProfileExit: buttonProfile = buttonProfile({
    type: 'button',
    text: 'Выйти',
    id: 'link',
    loc: '/login',
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing exit',
    cursor: 'pointer'
})

export const eddit = (profile: Profile) => {

    const profileTypeInfoMail: input = input({
        type: 'text',
        name: 'email',
        selectorInput: 'search',
        selecrtorLable: 'searchLable',
        idForLable: 'search',
        value: profile.mail
    })

    const profileTypeInfoLogin: input = input({
        type: 'text',
        name: 'login',
        selectorInput: 'search',
        selecrtorLable: 'searchLable',
        idForLable: 'search',
        value: profile.login
    })

    const profileTypeInfoName: input = input({
        type: 'text',
        name: 'first_name',
        selectorInput: 'search',
        selecrtorLable: 'searchLable',
        idForLable: 'search',
        value: profile.first_name
    })

    const profileTypeInfoFirstName: input = input({
        type: 'text',
        name: 'second_name',
        selectorInput: 'search',
        selecrtorLable: 'searchLable',
        idForLable: 'search',
        value: profile.second_name
    })

    const profileTypeInfoPhone: input = input({
        type: 'text',
        name: 'phone',
        selectorInput: 'search',
        selecrtorLable: 'searchLable',
        idForLable: 'search',
        value: profile.phone
    })

    return Handlebars.compile(template)({
        login: profile.login,
        profileTypeInfoMail: profileTypeInfoMail,
        profileTypeInfoLogin: profileTypeInfoLogin,
        profileTypeInfoName: profileTypeInfoName,
        profileTypeInfoFirstName: profileTypeInfoFirstName,
        profileTypeInfoPhone: profileTypeInfoPhone,
        buttonProfileEdit: buttonProfileEdit,
        buttonProfileEditPassword: buttonProfileEditPassword,
        buttonProfileExit: buttonProfileExit
    })
}