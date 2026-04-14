import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList";
import { getRecipeFromChefClaude } from "../ai.js"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Butter","Milk","Cheese","Pasta"]);

    const [recipe, setRecipe] = React.useState("")


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        setIngredients(prevArray => [...prevArray, newIngredient])
    }

    /*const [recipeShown, setRecipeShown] = React.useState(false);*/

    async function getRecipe() {
        const generatedRecipe = await getRecipeFromChefClaude(ingredients)
        setRecipe(generatedRecipe)
    }

    return (
        <main>
            <form action={addIngredient} className="IngredientForm">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. Coriander"
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients}
            getRecipe={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}