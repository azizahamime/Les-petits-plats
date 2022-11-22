import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap';
import "../scss/style.scss";


//import axios from "axios";
import { recipeFactory } from "./factories/recipe.js";
import { recipes} from "../data/recipes.js";
import { searchRecipe } from "./utils/search.js";
import { displaytags } from "./utils/displayTags.js";
//import { searchTags } from "./utils/searchInTags.js";
const search = document.getElementById("search");
/*async function getDatas() {
  let data =  axios.get("../data/recipes.json").then((el)=> el.json());
  return data;
}*/

export function displayRecipe(recipes) {
  const recipeSection = document.querySelector(".recipes_container");
  recipes.forEach(rec => {
    const recipeModel = recipeFactory(rec);
    const recipeCard = recipeModel.getRecipeCard();
    recipeSection.append(recipeCard);
  });
}

function init(){
  console.log(recipes);
  displayRecipe(recipes);
  displaytags(recipes);
  search.addEventListener("input",(e)=>{
    let searchWord = e.target.value;
    searchRecipe(recipes,searchWord);
  });
 // displaytags(recipes);  
}
init();
