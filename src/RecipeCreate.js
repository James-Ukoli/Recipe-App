import React, { useState } from "react";
import "./App.css";

function RecipeCreate({ createRecipe }) {
const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: ""
}

const [formData, setFormData] = useState({...initialFormState})
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // spread operator to add to the array of items


  // .value to get user input values
//// [..recipes, newRecipe]
  const handleChange = ({target}) => {
    setFormData({
      ...formData, 
      [target.name]: target.value
    })
 
 
    
  }

 const handleSubmit = (event) => {
   event.preventDefault()
  createRecipe(formData)
  setFormData({...initialFormState})
 }
 



  return (
    <form onSubmit={handleSubmit}name="create" > 
      <table>
        <tbody>
          <tr>
              <td id="slimmer">
                <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} required/>
              </td>
              <td id="slimmer">
                <input name="cuisine"placeholder="Cuisine" onChange={handleChange} value={formData.cuisine} required/>
              </td>
              <td id="slimmer">
                <input name="photo" placeholder="URL" onChange={handleChange} value={formData.photo} required/>
              </td>
              <td id="wider">
                <textarea name="ingredients" placeholder="Ingredients" onChange={handleChange} value={formData.ingredients} required/>
              </td>
              <td id="wider">
                <textarea  name="preparation"placeholder="Preparation"onChange={handleChange} value={formData.preparation} required/>
              </td>
              <td id="slimmer">
                <button type="submit">Create</button>
              </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
