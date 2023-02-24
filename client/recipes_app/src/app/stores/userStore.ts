
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../app/api/agent";
import { User } from "../../app/models/user";
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
        store.commonStore.setToken(null);
        this.user = null;
        router.navigate("/");
    };

    login = async (user: User) => {
        try {
            const response = await agent.Accounts.login(user);
            runInAction(() => {
                if (response) {
                    store.commonStore.setToken(response.refresh);
                    router.navigate("/recipes");
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

    createUser = async (user: User) => {
        try {
            runInAction(() => {
                agent.Accounts.createUser(user);
            });
        } catch (error) {
            console.log(error);
        }
    };
}