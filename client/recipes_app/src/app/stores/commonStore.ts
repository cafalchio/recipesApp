import { makeAutoObservable } from "mobx";

export default class CommonStore {
    constructor() {
        makeAutoObservable(this);
    }

    token: string | null = window.localStorage.getItem("jwt");

    setToken = (token: string | null) => {
        window.localStorage.setItem("jwt", token!);
        this.token = token;
    }

    getToken = () => {
        return window.localStorage.getItem("jwt");
    }

}