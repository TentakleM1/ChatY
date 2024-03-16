import ErrorCode from './src/pages/404/404';
import Auth from './src/pages/auth/auth';
import Registration from './src/pages/registration/registration';
import Chats from './src/pages/chats/chats';
import Profile from './src/pages/profile/profile'
import Eddit from './src/pages/eddit/eddit'

import { Router } from './src/core/router/router'
import render from './src/core/utils/render/render';

import { data } from './public/db/data';

document.addEventListener("DOMContentLoaded", async () => {

    const router = new Router("#app");

    router 
        .use("/", Auth)
        .use("/registration", Registration)
        .use("/chats", Chats)
        .start();

})

