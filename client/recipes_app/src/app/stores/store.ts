import { createContext, useContext } from "react";
import UserStore from "./userStore";
import RecipeStore from './recipeStore';

interface Store {
    recipeStore : RecipeStore;
    userStore: UserStore;
}

export const store: Store = {
    recipeStore: new RecipeStore(),
    userStore: new UserStore(),
};

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}