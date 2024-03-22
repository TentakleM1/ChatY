import { IUser } from "../api/AuthApi";
import profileApi from "../api/ProfileApi";
import Store from "../store/Store";


export default class ProfileController {
    async getUser(id: number): Promise<IUser> | undefined {
        try {
            const user = await profileApi.getUser(id);
            Store.set('user', user);
        } catch(e) {
            console.log(e)
            return undefined;
        }
    }
} 
