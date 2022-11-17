// importer la fonction displayRecipe
import { displayRecipe } from "../main.js";
import { displaytags } from "./displayTags.js";

const recipeSection = document.querySelector(".recipes_container");

/**
 * @param {array} data 
 */
export function searchRecipe(data, word){
  let arrayAfterFilter = [];
  // si le nombre de caractére est < 3 afficher toute les recettes
  if (word.length < 3){
    recipeSection.innerHTML ="";
    displayRecipe(data);
    displaytags(data);
  } else {
    // filtrer les recettes selon le titre ou la description ou ingredients
    arrayAfterFilter = data.filter(recipe => recipe.name.toLowerCase().includes(word.toLowerCase()) || recipe.description.toLowerCase().includes(word.toLowerCase()) || recipe.ingredients.find(ing =>ing.ingredient.toLowerCase().includes(word.toLowerCase()))  );
   
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
      recipeSection.innerHTML = `<h2 class="text-center">Aucune recette ne correspond à votre critère… <br> vous pouvez chercher « tarte aux pommes », « poisson », etc.</h2>`; 
      displaytags(data);
    } else {
      recipeSection.innerHTML = "";
      displayRecipe(arrayAfterFilter);
      displaytags(arrayAfterFilter);
      



    }
  }
  
}