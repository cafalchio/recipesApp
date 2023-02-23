import { makeAutoObservable, runInAction } from "mobx";
import { Recipe } from "../../app/models/recipe";
import agent from "../../app/api/agent";

export default class RecipeStore {
    recipes: Recipe[] = [];
    singleRecipe: Recipe | null = null;
    
    constructor() {
        makeAutoObservable(this);
    }
    getRecipes = async () => {
        try {
            const response = await agent.Recipes.getRecipes();
            runInAction(() => {
                if (response) {
                    this.recipes = response;
                }
            });
        } catch (error) {
            console.log(error);
        }
    }
}