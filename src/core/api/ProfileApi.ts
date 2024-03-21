import { IUser } from "./AuthApi";
import BaseAPI from "./BaseApi";

class ProfileApi extends BaseAPI {
    constructor() {
        super('/user');
    }

    public getUser(id: number): Promise<IUser> {
        return this.http.get(`/${id}`);
    }
}

export default new ProfileApi();
