import React from "react";

export default function Main(){

    const [ingredient,setIngredient]=React.useState(["Chikcekn","vehetable","Fish"]);
    const ingredientmap = ingredient.map(ingredient=><li key={ingredient}>{ingredient}</li>);
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient");
        setIngredient(ing=>[...ing,newIngredient]);
        console.log(ingredient);
    }

    return(
        <main>
        <form action={addIngredient} className="add-ingredient-form">
            <input
            type="text"
            placeholder="eg.orgeno"
            aria-label="Add ingredient"
            name="ingredient"
            />
            <button>Add ingredient</button>
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description"></textarea>
        </form>
        <ul>
            {ingredientmap}
        </ul>
        </main>
    )
}