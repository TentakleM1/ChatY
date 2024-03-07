import ErrorCode from './src/pages/404/404';
import Auth from './src/pages/auth/auth';
import Registration from './src/pages/registration/registration';
import Chats from './src/pages/chats/chats';
import Profile from './src/pages/profile/profile'
import Eddit from './src/pages/eddit/eddit'

import render from './src/core/utils/render/render';

import { data } from './public/db/data';

document.addEventListener("DOMContentLoaded", () => {
    const location = window.location.pathname;

    const auth: Auth = new Auth();
    const errorCode: ErrorCode = new ErrorCode();
    const registration: Registration = new Registration();
    
    const page = (path: string) => {
        if(path === '/' || path === '') {

            window.location.pathname = '/login';
        
        } else if(path === '/login') {
            
            render('#app', auth);
            
        } else if(path === '/registration') {

            render('#app', registration);

        } else if(path === '/chats') {

            render('#app', new Chats(data.chats, path));

        } else if(path === '/profile') {

            render('#app', new Profile(data.profile));

        } else if(path === '/profile/eddit') {

            render('#app', new Eddit(data.profile))

        } else {
            const names = data.chats.map((name) => name.profile_name)
            const name = path.split('/').join('')

            if(names.includes(name)) {
                render('#app', new Chats(data.chats, path))
            } else {
                render('#app', errorCode)
            }

        }

    }

    page(location)


})

