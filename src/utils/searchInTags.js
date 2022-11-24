import { addTags  } from "./addDeleteTags";
export function searchTags(){
  const ingElements = Array.from(document.querySelectorAll(".ingredients li"));
  const appElements = Array.from(document.querySelectorAll(".appliances li"));
  const ustElements = Array.from(document.querySelectorAll(".ustensils li"));

  const searchIng = document.getElementById("search-ing");
  const searchApp = document.getElementById("search-app");
  const searchUst = document.getElementById("search-ust");

  function search(event,tab){
    event.addEventListener("input",function(e){
      const wordToFind = e.target.value;
      tab.forEach(el=>{
        if(!(el.textContent.toLowerCase().includes(wordToFind.toLowerCase()))){
          el.classList.add("hidden");
        } else {
          el.classList.remove("hidden");
        }
      })
    })
  }

  search(searchIng, ingElements);
  search(searchApp, appElements);
  search(searchUst, ustElements);

  ingElements.forEach(function(el){
    el.addEventListener("click",()=>{addTags(el);})  
  })
  appElements.forEach(function(el){
    el.addEventListener("click",()=>{ addTags(el);})
  })
  ustElements.forEach(function(el){
    el.addEventListener("click",()=>{ addTags(el);})
  })
  
}