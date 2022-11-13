/**
 * @param {array} data 
 */
import { displayRecipe } from "../main.js";
const recipeSection = document.querySelector(".recipes_container");
const recipeSectionContainer = document.querySelector("#recipes .container");
export function searchRecipe(data, word){
  console.log(data.ingredients);
  let arrayAfterFilter = [];
  if (String(word).length < 3){
    displayRecipe(data);
  } else {
    arrayAfterFilter = data.filter(recipe => recipe.name.toLowerCase().includes(word.toLowerCase()));
    arrayAfterFilter = data.filter(recipe =>recipe.description.toLowerCase().includes(word.toLowerCase()));
    data.forEach(element => {
      element.ingredients.forEach(ing=>{
        if((ing.ingredient.toLowerCase().includes(word.toLowerCase()))){
          if(!(arrayAfterFilter.includes(element))){
            arrayAfterFilter.push(element);
          }
        }
      });
    });    
    
    if (arrayAfterFilter.length === 0) {
      recipeSectionContainer.innerHTML = `<h2 class="text-center">Aucune recette ne correspond à votre critère… <br> vous pouvez chercher « tarte aux pommes », « poisson », etc.</h2>`;
    } else {
      recipeSection.innerHTML = "";
      console.log(arrayAfterFilter);             
      displayRecipe(arrayAfterFilter);

    }
  }
  
}