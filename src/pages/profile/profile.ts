import Handlebars from "handlebars";

import { template } from "./profile.tmpl";
import { buttonProfile } from '../../partials/button/button.tmpl';
import { profileTypeInfo } from '../../partials/profile-type-info/profile-type-info.tmpl';

export type Profile = {
    first_name: string;
    second_name: string;
    login: string;
    mail: string;
    phone: string;
    password: string;
}

const buttonProfileEdit: buttonProfile = buttonProfile({
    selectorWrap: 'wrap-editing',
    selectorButton: 'editing',
    type: 'button',
    text: 'Изменить данные',
    id: 'link',
    loc: '/profile/eddit'
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

export const profile = (profile: Profile) => {

    const profileTypeInfoMail: profileTypeInfo =  profileTypeInfo({type: 'Почта', info: profile.mail})
    const profileTypeInfoLogin: profileTypeInfo =  profileTypeInfo({type: 'Логин', info: profile.login})
    const profileTypeInfoName: profileTypeInfo =  profileTypeInfo({type: 'Имя', info: profile.first_name})
    const profileTypeInfoFirstName: profileTypeInfo =  profileTypeInfo({type: 'Фамилия', info: profile.second_name})
    const profileTypeInfoPhone: profileTypeInfo =  profileTypeInfo({type: 'Телефон', info: profile.phone})

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
