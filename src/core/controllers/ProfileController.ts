import { Routes } from "../../../main";
import { IUser } from "../api/AuthApi";
import ProfileApi from "../api/ProfileApi";
import profileApi from "../api/ProfileApi";
import { router } from "../router/router";
import Store from "../store/Store";
import { AuthController } from "./AuthController";


export class ProfileController {
    static async getUser(id: number): Promise<IUser> | undefined {
        try {
            const user = await profileApi.getUser(id);
            Store.set('user', user);
        } catch(e) {
            console.log(e)
            return undefined;
        }
    }

    static async changeUser(data: Record<string, string>): Promise<Record<string, string>> {
        try{
            await ProfileApi.userChange(data);
            await AuthController.getUser();
            router.go(Routes.Profile);

        } catch(e) {
            console.log(e);
        }
    }

    static async changeAvatar(data) {
        try{
            await ProfileApi.changeAvatar(data);
            await AuthController.getUser();
        } catch (e) {
            console.log(e)
        }
    }
} 
