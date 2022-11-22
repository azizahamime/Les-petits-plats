const  tagsContainer = document.getElementById("tags");
export function addTags(arg){
  const tag = document.createElement("div");
  tag.classList.add("tag");

 if(arg.parentNode.classList.contains("ingredients")){
   tag.classList.add("bg-primary");
  } else if(arg.parentNode.classList.contains("devices")){
    tag.classList.add("bg-success");
  }else if (arg.parentNode.classList.contains("ustensils")){
    tag.classList.add("bg-danger");
  }
  arg = arg.textContent;
  tag.innerHTML = `${arg} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="close"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>`;
  
  tagsContainer.append(tag);
  deleteTags();
}
function deleteTags(){
  const closes = Array.from(document.querySelectorAll("#tags .close"));

  closes.forEach(close=>{
    close.addEventListener("click",function(){
      close.parentNode.remove();
    })
  })
}