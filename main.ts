import ErrorCode from './src/pages/404/404';
import Auth, { authController } from './src/pages/auth/auth';
import Registration from './src/pages/registration/registration';
import Chats from './src/pages/chats/chats';
import { ProfilePage } from './src/pages/profile/profile'
import Eddit from './src/pages/eddit/eddit'

import { Router } from './src/core/router/router'

export enum Routes {
    Login = '/',
    Register = '/signup',
    Chats = '/chats',
    Profile = '/profile',
    EditPassword = '/settings-password',
    ProfileEdit = '/edit',
    ErrorPage = '/error',
}

export const router = new Router("#app");

document.addEventListener("DOMContentLoaded", async () => {

    router 
        .use(Routes.Login, Auth)
        .use(Routes.Register, Registration)
        .use(Routes.Chats, Chats)
        .use(Routes.Profile, ProfilePage)
        .use(Routes.ProfileEdit, Eddit)
        .use(Routes.ErrorPage, ErrorCode);

    router.start();
})

