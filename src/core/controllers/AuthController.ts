import authApi, { ISigninData, ISignupData } from "../api/AuthApi";
import store from "../store/Store";
import { router, Routes } from "../../../main";

export default class AuthController {

    public async getUser() {
        const user = await authApi.getUser();
        store.set('user', user);
    }

    public async singin(data: ISigninData) {
        try {
            await authApi.signin(data)
            await this.getUser();
            router.go(Routes.Chats);
            
        } catch(e) {
            console.log(e);
        }
    }

    public async singup(data: ISignupData) {
        try{
            await authApi.signup(data);
            await this.getUser();
            router.go(Routes.Login);

        } catch(e) {
            console.log(e)
        }
    }

    public async logout() {
        try {
            await authApi.logout();
            store.set('user', undefined);
            router.go(Routes.Login);
        } catch (e) {
            console.log(e);
        }
    }


}
