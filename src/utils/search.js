/**
 * @param {array} data 
 */
import { displayRecipe } from "../main.js";
const recipeSection = document.querySelector(".recipes_container");
export function searchRecipe(data, word){
  let arrayAfterFilter = [];
  if (String(word).length < 3){
    displayRecipe(data);
  } else {
    arrayAfterFilter = data.filter(recipe => recipe.name.includes(word));
    
    if (arrayAfterFilter.length === 0) {
      recipeSection.innerHTML = `<h2>Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.</h2>`;
    } else {
      recipeSection.innerHTML = "";
      console.log(arrayAfterFilter);             
      displayRecipe(arrayAfterFilter);

    }
  }
  
}