import { recipes } from "../../data/recipes.js";
import {  displayRecipe } from "../main";
import { displaytags } from "./displayTags.js";
import { searchRecipe } from "./search.js";


export let tags ={
  ingredients:[],
  appliances:[],
  ustensils:[]
}

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
  console.warn(tags.ingredients);
  
  filter(recipesTag,tags);  
}

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

export function filter(recipesTag,tags){
  const wordSearch = document.getElementById("search").value; 
  console.error(wordSearch);
  if(wordSearch !==""){
    searchRecipe(recipes,wordSearch);
    recipesTag = availableRecipes();
  }
  const filtredRecipes = recipesTag.filter(el=>(tags.ingredients.every(tag=>el.ingredients.map(ing=>ing.ingredient).includes(tag))) && (tags.appliances.every(apTag =>el.appliance.includes(apTag))) && (tags.ustensils .every(ustTag=>el.ustensils.map(ust=>ust).includes(ustTag))));
  console.log(filtredRecipes);
  displayRecipe(filtredRecipes);
  displaytags(filtredRecipes);
}

