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

    public changeAvatar(data) {
        return this.http.put('/profile/avatar', data);
    }

    public searchUser(data) {
        return this.http.post('/search', data);
    }
}

export default new ProfileApi();
