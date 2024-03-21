import { IUser } from "../api/AuthApi";
import profileApi from "../api/ProfileApi";


export default class ProfileController {
    async getUser(id: number): Promise<IUser> | undefined {
        try {
            return profileApi.getUser(id);
        } catch(e) {
            console.log(e)
            return undefined;
        }
    }
} 
