import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import "../scss/style.scss";
import { recipeFactory } from "./factories/recipe.js";
import { recipes} from "../data/recipes.js";
import { searchRecipe } from "./utils/search.js";
import { displaytags } from "./utils/displayTags.js";
import { filter,tags } from "./utils/filterTag";


const search = document.getElementById("search");

/**
 * @param {ArrayOfObjects} recipes 
 * Affichage de recettes a partir de tableau d'objets recipes
*/

export function displayRecipe(recipes) {
  const recipeSection = document.querySelector(".recipes_container");
  recipeSection.innerHTML = "";
  recipes.forEach(rec => {
    const recipeModel = recipeFactory(rec);
    const recipeCard = recipeModel.getRecipeCard();
    recipeSection.append(recipeCard);
  });
}

// fonction principale
function init(){
  displayRecipe(recipes);
  displaytags(recipes);
  search.addEventListener("input",(e)=>{
    let searchWord = e.target.value;
    searchRecipe(recipes,searchWord);
    filter(recipes,tags);
  });
}
init();
