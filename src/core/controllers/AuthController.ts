import authApi, { ISigninData, ISignupData } from "../api/AuthApi";
import store from "../store/Store";
import { router } from '../../core/router/router';
import { Routes } from '../../../main.js';

export class AuthController {
    static async getUser() {
        const user = await authApi.getUser();
        store.set('user', user);
    }

    static async signin(data: ISigninData) {
        try {
            await authApi.signin(data);
            await this.getUser();
            router.go(Routes.Chats);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async signup(data: ISignupData) {
        try {
            await authApi.signup(data);
            await this.getUser();
            router.go(Routes.Chats);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }

    static async logout() {
        try {
            await authApi.logout();
            store.set('user', undefined);
            router.go(Routes.Login);
        } catch (e) {
            if (e instanceof Error && 'reason' in e) console.error(e.reason);
            console.error(e);
        }
    }
}