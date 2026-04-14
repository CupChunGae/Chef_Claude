import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList";

export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")

        setIngredients(prevArray => [...prevArray, newIngredient])
    }

    const [recipeShown, setRecipeShown] = React.useState(false);

    function handleClick() {
        setRecipeShown(prevState => !prevState)
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
            buttonClicked={handleClick}/>}
            {recipeShown == true && <ClaudeRecipe/>}
        </main>
    )
}