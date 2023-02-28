
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../app/api/agent";
import { CreateUser, User } from "../../app/models/user";
import { router } from "../router/Routes";
import { store } from "./store";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    logout = () => {
        store.commonStore.deleteTokens();
        this.user = null;
        router.navigate("/");
    };

    login = async (user: User) => {
        try {
            const response = await agent.Accounts.login(user);
            runInAction(() => {
                if (response) {
                    store.commonStore.setRefreshToken(response.refresh);
                    store.commonStore.setAccessToken(response.access);
                    router.navigate("/home");
                    console.log(response)
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    getUser = async () => {
        try {
            const response = await agent.Accounts.getUser();
            runInAction(() => {
                if (response) {
                    this.user = response;
                }
            });
        } catch (error) {
            console.log(error);
        }
    };

    createUser = async (user: CreateUser) => {
        try {
            runInAction(() => {
                agent.Accounts.createUser(user);
            });
        } catch (error) {
            console.log(error);
        }
    };
}