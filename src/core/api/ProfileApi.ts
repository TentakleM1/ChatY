import { IUser } from "./AuthApi";
import BaseAPI from "./BaseApi";

class ProfileApi extends BaseAPI {
    constructor() {
        super('/user');
    }

    public getUser(id: number): Promise<IUser> {
        return this.http.get(`/${id}`);
    }

    public userChange(data: Record<string, string>): Promise<Record<string, string>> {
        return this.http.put('/profile', data);
    }
}

export default new ProfileApi();
