import BaseAPI from "./BaseApi";

export interface ISignupData {
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    phone: string
}

export interface ISigninData {
    login: string,
    password: string
}

export interface IUser {
    id: number,
    first_name: string,
    second_name: string,
    display_name: string,
    phone: string,
    login: string,
    avatar: string,
    email: string
}

class AuthApi extends BaseAPI {
    constructor() {
        super('/auth');
    }

    public signin(data: ISigninData) {
        return this.http.post('/signin', data);
    }

    public signup(data: ISignupData) {
       return this.http.post('/signup', data);
    }

    public logout() {
        return this.http.post('/logout');
    }

    public getUser(): Promise<IUser> {
        return this.http.get('/user');
    }
}

export default new AuthApi();
