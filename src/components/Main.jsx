import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(["Chicken"]);

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")

        setIngredients(prevArray => [...prevArray, newIngredient])
    }

    return (
        <main>
            <form onSubmit={handleSubmit} className="IngredientForm">
                <input 
                type="text" 
                aria-label="Add ingredient"
                placeholder="e.g. Coriander"
                name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}