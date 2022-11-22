import { addTags  } from "./addDeleteTags";
export function searchTags(){
  const ingElements = Array.from(document.querySelectorAll(".ingredients li"));
  const devElements = Array.from(document.querySelectorAll(".devices li"));
  const ustElements = Array.from(document.querySelectorAll(".ustensils li"));

  const searchIng = document.getElementById("search-ing");
  const searchDev = document.getElementById("search-dev");
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
  search(searchDev, devElements);
  search(searchUst, ustElements);
  ingElements.forEach(function(el){
    el.addEventListener("click",()=>{
      addTags(el);
    })
  })
  devElements.forEach(function(el){
    el.addEventListener("click",()=>{
      addTags(el);
    })
  })
  ustElements.forEach(function(el){
    el.addEventListener("click",()=>{
      addTags(el);
    })
  })
  
}