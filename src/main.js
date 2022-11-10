import "../scss/style.scss";
import "bootstrap";
//import axios from "axios";
import { recipeFactory } from "./factories/recipe.js";
import { recipes} from "../data/recipes.js";
/*async function getDatas() {
  let data =  axios.get("../data/recipes.json").then((el)=> el.json());
  return data;
}*/

function displayRecipe(recipes) {
  const recipeSection = document.querySelector("#recipes");
  recipes.forEach(rec => {
    const recipeModel = recipeFactory(rec);
    const recipeCard = recipeModel.getRecipeCard();
    recipeSection.append(recipeCard);
  });
}

function init(){
  console.log(recipes);
  displayRecipe(recipes);
 // recipes.forEach(ele =>displayRecipe(ele));
  
}
init();
