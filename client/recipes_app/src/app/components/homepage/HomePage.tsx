// import { useStore } from "../../app/stores/store"
// import { useEffect, useState } from 'react';
import RecipeCard from '../card/RecipeCard';
import './HomePage.css';

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
        <div className='recipes-cards-container'>
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