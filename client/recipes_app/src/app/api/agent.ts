import axios, { AxiosError, AxiosResponse } from "axios";
import { Recipe } from "../models/recipe";
import { router } from "../router/Routes";
import { User } from "../models/user";

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

axios.defaults.baseURL = "http://localhost:8000/api/";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(
    async (response) => {
        if (process.env.NODE_ENV === "development") await sleep(1000);
        return response as AxiosResponse<any>;
    },
    (error: AxiosError) => {
        const { data, status, config } = error.response as AxiosResponse;
        switch (status) {
            case 400:
                if (
                    config.method === "get" &&
                    data.errors.hasOwnProperty("id")
                ) {
                    router.navigate("/not-found");
                }
                if (data.errors) {
                    const modalStateErrors = [];
                    for (const key in data.errors) {
                        if (data.errors[key]) {
                            modalStateErrors.push(data.errors[key]);
                        }
                    }
                    throw modalStateErrors.flat();
                } else {
                    console.log(data);
                }
                break;
            case 401:
                console.log("unauthorised");
                break;
            case 403:
                console.log("forbidden");
                break;
            case 404:
                router.navigate("/not-found");
                break;
            case 500:
                // store.commonStore.setServerError(data);
                router.navigate("/server-error");
                break;
        }
        return Promise.reject(error);
    }
);

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Accounts = {
    createUser : (user: User) => requests.post("/accounts/", user),
    refreshToken: () => requests.post("/token/refresh", {}),

};

const Recipes = {
    list: () => requests.get<Recipe[]>("/recipes/"),
};


const agent = {
    Accounts,
    Recipes,
};

export default agent;