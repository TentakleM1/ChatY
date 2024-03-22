import ErrorCode from './src/pages/404/404';
import Auth, { authController } from './src/pages/auth/auth';
import Registration from './src/pages/registration/registration';
import Chats from './src/pages/chats/chats';
import Profile, { ProfilePage } from './src/pages/profile/profile'
import Eddit from './src/pages/eddit/eddit'

import { router } from './src/core/router/router';
import { AuthController } from './src/core/controllers/AuthController';

export enum Routes {
    Login = '/',
    Register = '/signup',
    Chats = '/chats',
    Profile = '/profile',
    EditPassword = '/settings-password',
    ProfileEdit = '/edit',
    ErrorPage = '/error',
}


document.addEventListener("DOMContentLoaded", async () => {

    router
        .use(Routes.Chats, Chats)
        .use(Routes.Login, Auth)
        .use(Routes.Register, Registration)
        .use(Routes.Profile, ProfilePage)

    let isProtectedRoute = true;

    switch (window.location.pathname) {
    case Routes.Login:
    case Routes.Register:
        isProtectedRoute = false;
        break;
    default:
        break;
    }

    try {
        await AuthController.getUser();
        router.start();
        if (!isProtectedRoute) {
            router.go(Routes.Chats);
        }
    } catch (error) {
        router.start();
        if (isProtectedRoute) {
            router.go(Routes.Login);
        }
    }
    
});

