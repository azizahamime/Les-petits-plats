import { searchTags  } from "./searchInTags";

const buttons = document.querySelectorAll(".drop-down button");
const closes = document.querySelectorAll(".close-dropdown");

//ouvrir le dropdown liste de recherche avancé au click sur les boutons
buttons.forEach(button =>{
  button.addEventListener("click",function(e){
    this.nextElementSibling.style = "position: relative;top:0;left:0;display:block";
    this.style.display ="none";
    
   
    buttons.forEach(el=>{
      if (el.textContent !== this.textContent){
        el.parentElement.firstElementChild.style.display="block";
        el.parentElement.lastElementChild.style.display="none";
      }
    })

  })
})

//Fermer les dropdown liste de recherche avancé au click sur les boutons
closes.forEach(close =>{
  close.addEventListener("click",function(){
    this.parentNode.parentNode.previousElementSibling.style = "display:block";
    this.parentNode.parentNode.style ="display:none;";    
  })
}) 

/**
 * @param {array} data 
*/
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
  
  //eliminer les ingredients doubles
  const ings= [...new Set((ingArray.map(el=>el.charAt(0).toUpperCase() + el.slice(1))).sort())];
  //eliminer les ustensils doubles
  const ustensilsArr = [...new Set ((ustArray.map(el=>el.charAt(0).toUpperCase() + el.slice(1))).sort())];
  //eliminer les appareils doubles
  const applianceArr = [...new Set((applArray.map(el=>el.charAt(0).toUpperCase() + el.slice(1))).sort())];
  let plurialArr =[];

  //Enlever le pluriels des ingredients exemple pomme et pommes
  ings.forEach(el=>{
    const plurial = el+"s";
    ings.forEach(ele=>{
      if (ele ===plurial){
       plurialArr.push(plurial);
      }
    })
  })

  const ingredientArr = ings.filter(value => !plurialArr.includes(value));
  // afficher les ingredients dans dropdown liste
  ingredientArr.forEach(ing =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${ing}` ;
    ingredientsContainer.append(tagName);
  });
  // afficher les appareils dans dropdown liste
  applianceArr.forEach(dev =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${dev}` ;
    appliancesContainer.append(tagName);
  });
  // afficher les ustensils dans dropdown liste
  ustensilsArr.forEach(ust =>{
    let tagName = document.createElement("li");
    tagName.classList.add('dropdown-item');
    tagName.innerHTML = `${ust}` ;
    ustensilsContainer.append(tagName);
  });
  searchTags(); 
}
