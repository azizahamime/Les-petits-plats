import { searchTags  } from "./searchInTags";
const buttons = document.querySelectorAll(".dropdown button");
const closes = document.querySelectorAll(".close-dropdown");
buttons.forEach(button =>{
  button.addEventListener("click",function(e){
    this.nextElementSibling.style = "position:relative; top:-55px; left:0;display:block";
    this.style.opacity ="0";

  })
}) 
closes.forEach(close =>{
  close.addEventListener("click",function(){
    this.parentNode.parentNode.previousElementSibling.style = "display:relative";
    this.parentNode.parentNode.style ="display:none;";    
  })
}) 
export function displaytags(data){
  const ingredientsContainer = document.querySelector(".ingredients");
  const appliancesContainer = document.querySelector(".appliances");
  const ustensilsContainer = document.querySelector(".ustensils");

  ingredientsContainer.innerHTML ="";
  appliancesContainer.innerHTML = "";
  ustensilsContainer.innerHTML = "";


  const ingArray = [];
  const ustArray = [];
  const applArray = [];
  data.forEach(el=>{
    el.ingredients.forEach(ing => ingArray.push(ing.ingredient));
    el.ustensils.forEach(ust => ustArray.push(ust));
    applArray.push(el.appliance);
  });
  const uniqueIng = new Set(ingArray.sort());
  const uniqueUst = new Set(ustArray.sort());
  const uniqueDevice = new Set(applArray.sort());

  const ingredientArr = [...uniqueIng];
  const ustensilsArr = [...uniqueUst];
  const applianceArr = [...uniqueDevice];
  ingredientArr.forEach(ing =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${ing}` ;
    ingredientsContainer.append(tagName);
  });
  applianceArr.forEach(dev =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${dev}` ;
    appliancesContainer.append(tagName);
  });
  ustensilsArr.forEach(ust =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${ust}` ;
    ustensilsContainer.append(tagName);
  });
  searchTags();
  
}
