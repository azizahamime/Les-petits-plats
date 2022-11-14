// importer la fonction displayRecipe
import { displayRecipe } from "../main.js";

const recipeSection = document.querySelector(".recipes_container");
const recipeSectionContainer = document.querySelector("#recipes .container");
/**
 * @param {array} data 
 */
export function searchRecipe(data, word){
  let arrayAfterFilter = [];
  // si le nombre de caractére est < 3 afficher toute les recettes
  if (word.length < 3){
    displayRecipe(data);
  } else {

    // filtrer les recettes selon le titre ou la description
    arrayAfterFilter = data.filter(recipe => recipe.name.toLowerCase().includes(word.toLowerCase()) || recipe.description.toLowerCase().includes(word.toLowerCase()) || recipe.ingredients.find(ing =>ing.ingredient.toLowerCase().includes(word.toLowerCase()))  );
   
    //arrayAfterFilter = data.filter(recipe =>recipe.description.toLowerCase().includes(word.toLowerCase()));

    //filtrer les recette selon les ingredients
    /*data.forEach(element => {
      element.ingredients.forEach(ing=>{
        if((ing.ingredient.toLowerCase().includes(word.toLowerCase()))){
          if(!(arrayAfterFilter.includes(element))){
            arrayAfterFilter.push(element);
          }
        }
      });
    }); */
    
    
    //s'il y a pas une recette qui correspond au caractéres recherchés afficher un message sino afficher les recettes
    if (arrayAfterFilter.length === 0) {
      recipeSectionContainer.innerHTML = `<h2 class="text-center">Aucune recette ne correspond à votre critère… <br> vous pouvez chercher « tarte aux pommes », « poisson », etc.</h2>`;
    } else {
      recipeSection.innerHTML = "";
      displayRecipe(arrayAfterFilter);

    }
  }
  
}