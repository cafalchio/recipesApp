
import { makeAutoObservable, runInAction } from "mobx";
import agent from "../../app/api/agent";
import { User } from "../../app/models/user";
import { router } from "../router/Routes";
import { store } from "./store";
// import { CreateUser, User } from "../models/user";
// import { router } from "../router/Routes";

export default class UserStore {
    user: User | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    get isLoggedIn() {
        return !!this.user;
    }

    logout = () => {
        // store.commonStore.setToken(null);
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

    // getUser = async () => {
    //     try {
    //         const response = await agent.Users.current();
    //         runInAction(() => {
    //             this.user = response.data;
    //             if (process.env.NODE_ENV === "development")
    //                 console.log("Response: ", JSON.stringify(response));
    //         });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

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