import { recipes } from "../../data/recipes.js";
import {  displayRecipe } from "../main";
import { displaytags } from "./displayTags.js";
import { searchRecipe } from "./search.js";


export let tags ={
  ingredients:[],
  appliances:[],
  ustensils:[]
}

/**
 * @param {HTMLElement} tag 
 * @param {string} cat categorie
 * si categorie de tag est ingredient on lajoute au tableau ingredient ,s'il est cat ustensils on lajoute au tableau ustensils...
 */

export function filterTag(tag,cat){
  const recipesTag = availableRecipes();
  
  if (cat ==="ingredient"){
    if (!(tags.ingredients.includes(tag.textContent))){
      tags.ingredients.push(tag.textContent); 
    }
  } else if (cat ==="appliance"){
    if (!(tags.appliances.includes(tag.textContent))){
      tags.appliances.push(tag.textContent);
    }
  } else if (cat ==="ustensil"){
    if (!(tags.ustensils.includes(tag.textContent))){
      tags.ustensils.push(tag.textContent);
    }
  }
  filter(recipesTag,tags);  
}

/**
 * @returns {array} recipesTag
 * recupérer les tags disponibles
 */
export function availableRecipes(){
  const recipesTag =[];

  const presentRecipe = Array.from(document.querySelectorAll(".recipe_title"));
  presentRecipe.forEach(el=>{
    recipes.forEach(recipe =>{
      if(el.textContent === recipe.name){
        recipesTag.push(recipe);
      } 
    })
  })
  return recipesTag;
}

/**
 * @param {array} recipesTag 
 * @param {object} tags 
 * filtrer les recette selon les tag disponibles
 */
export function filter(recipesTag,tags){
  let wordSearch = document.getElementById("search").value; 
  if(wordSearch !==""){
    searchRecipe(recipes,wordSearch);
    recipesTag = availableRecipes();
  }
  const filtredRecipes = recipesTag.filter(el=>(tags.ingredients.every(tag=>el.ingredients.map(ing=>ing.ingredient.toLowerCase()).includes(tag.toLowerCase()))) && (tags.appliances.every(apTag =>el.appliance.toLowerCase().includes(apTag.toLowerCase()))) && (tags.ustensils.every(ustTag=>el.ustensils.map(ust=>ust.toLowerCase()).includes(ustTag.toLowerCase()))));
  displayRecipe(filtredRecipes);
  displaytags(filtredRecipes);
}

