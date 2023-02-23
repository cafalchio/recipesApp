// import { useStore } from "../../app/stores/store"
// import { useEffect, useState } from 'react';
import RecipeCard from '../card/RecipeCard';

const recipeList = [
    {
        title: 'Chicken Parm',
        description: 'Chicken Parm',
        cooking_time: '3',
        servings: "4",
        ingredients: 'Chicken Parm',
        instructions: 'Chicken Parm',
        image: "https://bing.com/th?id=AMMS_8d84b7d239c93987e45181aa937a69c9"
    },
    {
        title: 'Lasagna',
        description: 'Lasagna',
        cooking_time: '3',
        servings: "4",
        ingredients: 'Lasagna',
        instructions: 'Lasagna',
        image: "https://th.bing.com/th/id/R.44396e411022df244b22933e04ebd14a?rik=m08HEhzKK7qW0Q&pid=ImgRaw&r=0"
    },
    {
        title: 'Eggs Benedict',
        description: 'This easy but impressive stack makes a filling brunch for a crowd',
        cooking_time: '3',
        servings: "4",
        ingredients: 'Whisk all of the pancake ingredients together with some seasoning until smooth.',
        instructions: 'Put a small knob of butter in a large non-stick frying pan over a medium-low heat and cook until melted and foaming. Pour 2 tbsp of the mixture into the pan and use the back of the spoon to shape it into a 8-9cm round disc. Depending on the size of your pan, you may be able to get 2 or 3 pancakes to cook at the same time. Cook for 2-3 mins on the first side, then flip over and cook for another 1 min.',
        image: "https://bing.com/th?id=OSK.69fe8168a76a940a396d33426f1f0206"
    },
]


export default function HomePage() {
    // const {recipeStore } = useStore()
    // const {getRecipes, recipes} = recipeStore;

    // useEffect(() => {
    //     getRecipes();
    //     if (recipes.length > 0) {
    //         console.log(recipes[0].title)
    //     }
    // }, [getRecipes])
    return (
        <>
        <div style={{display: "flex"}}>
            {recipeList.map(recipe => (
                <RecipeCard key={recipe.title}
                image={recipe.image}
                header={recipe.title}
                meta={recipe.ingredients}
                description={recipe.description}
                />
            ))}

        </div>
        </>
    )
}