import "../scss/style.scss";
import "bootstrap";
import "../node_modules/axios/dist/axios.min.js";
import { recipeFactory } from "./factories/recipe.js";

async function getDatas() {
  let data =  axios.get("../data/recipes.js").then((el)=> el.data);
  /*.then((res)=>JSON.parse(res));
  return data;*/
  return data;
}

async function displayRecipe(recipes) {
  const recipeSection = document.querySelector(".recipes_row");
  recipes.forEach(rec => {
    const recipeModel = recipeFactory(rec);
    const recipeCard = recipeModel.getRecipeCard();
    recipeSection.append(recipeCard);
    
  });
}

async function init(){
  const recipes = await getDatas();
  console.log(recipes);
  //recipes.forEach(ele =>console.log(ele));
  
}
init();
