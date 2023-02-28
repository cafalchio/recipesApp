import { makeAutoObservable } from "mobx";

export default class CommonStore {
    setToken(refresh: string) {
        throw new Error("Method not implemented.");
    }
    constructor() {
        makeAutoObservable(this);
    }

    refreshToken: string | null = window.localStorage.getItem("refreshToken");
    accessToken: string | null = window.localStorage.getItem("accessToken");
    
    setRefreshToken = (token: string | null) => {
        window.localStorage.setItem("refreshToken", token!);
        this.refreshToken = token;
    }
    setAccessToken = (token: string | null) => {
        window.localStorage.setItem("accessToken", token!);
        this.accessToken = token;
    }

    getRefreshToken = () => {
        return window.localStorage.getItem("refreshToken");
    }
    getAccessToken = () => {
        return window.localStorage.getItem("accessToken");
    }

    deleteTokens = () => {
        window.localStorage.removeItem("refreshToken");
        window.localStorage.removeItem("accessToken");
        this.refreshToken = null;
        this.accessToken = null;
    }

}