import React, { useState } from "react";
import "./App.css";



function RecipeList({recipes, setRecipes}) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked






const recipeRows = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
  
  <tr key={index}>
    <td id="slimmer">{name}</td>
    <td id="slimmer">{cuisine}</td>
    <td id="slimmer">
      <img src={photo}></img>
      </td>
    <td id="wider" className="content_td">
    <p>
      {ingredients}
      </p>
      </td>
    <td id="wider" className="content_td">
      <p>
      {preparation}
      </p>
      </td>
    <td id="slimmer">
      <button id="deleteBtn" onClick={()=> setRecipes(recipes.filter(oneRecipe => oneRecipe.name !== name
      ))} name="delete">Delete</button>
      </td>
  </tr>
     
))
  return (
    <div className="recipe-list">
      <table>
        <thead>
<tr>
  
     <th id="slimmer">Name</th>
     <th id="slimmer">Cuisine</th>
     <th id="slimmer">Photo</th>
     <th id="wider">Ingredients</th>
     <th id="wider">Preparation</th>
     <th id="slimmer">Actions</th>
  
</tr>
        </thead>
        <tbody>
        {recipeRows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
