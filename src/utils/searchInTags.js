import { addTags  } from "./addDeleteTags";
import { filterTag } from "./filterTag.js";


/**
 * recherche d'element dans les listes (ingredients, ustensils, appareils ) des recherche avancée 
*/
export function searchTags(){
  const ingElements = Array.from(document.querySelectorAll(".ingredients li"));
  const appElements = Array.from(document.querySelectorAll(".appliances li"));
  const ustElements = Array.from(document.querySelectorAll(".ustensils li"));

  const searchIng = document.getElementById("search-ing");
  const searchApp = document.getElementById("search-app");
  const searchUst = document.getElementById("search-ust");

  function search(event,tab){
    event.addEventListener("input",function(e){
      const wordToFind = e.target.value.toLowerCase();
      if (wordToFind.length >2){
        tab.forEach(el=>{
          if(!(el.textContent.toLowerCase().includes(wordToFind))){
            el.classList.add("hidden");
          } else {
            el.classList.remove("hidden");
          }
        })
      }
    })
  }

  search(searchIng, ingElements);
  search(searchApp, appElements);
  search(searchUst, ustElements);

  /**
   * @param {HTMLEvent} el
   * au click sur un ingredient un tag sera ajouter les recettes affichées seront mises à jour
  */

  ingElements.forEach(function(el){
    el.addEventListener("click",()=>{
      addTags(el);
      filterTag(el,"ingredient");
      searchIng.value = "";
    })  
  })

  /**
   * @param {HTMLEvent} el
   * au click sur un appareil un tag sera ajouter les recettes affichées seront mises à jour
  */

  appElements.forEach(function(el){
    el.addEventListener("click",()=>{ 
      addTags(el);
      filterTag(el,"appliance");
      searchApp.value = "";
    }) 
  })

  /**
   * @param {HTMLEvent} el
   * au click sur un ustensil  un tag sera ajouter les recettes affichées seront mises à jour
  */

  ustElements.forEach(function(el){
    el.addEventListener("click",()=>{ 
      addTags(el);
      filterTag(el,"ustensil");
      searchUst.value = "";
    })
  })
  
}

