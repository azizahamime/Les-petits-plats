const buttons = document.querySelectorAll(".dropdown button");
const closes = document.querySelectorAll(".close-dropdown");
buttons.forEach(button =>{
  button.addEventListener("click",function(e){
    this.nextElementSibling.style = "position:absolute; top:0; left:0;display:block";
    this.style.opacity ="0";

  })
}) 
closes.forEach(close =>{
  close.addEventListener("click",function(){
    this.parentNode.parentNode.previousElementSibling.style = "display:block";
    this.parentNode.parentNode.style ="display:none;";    
  })
}) 
export function displaytags(data){
  const ingredientsContainer = document.querySelector(".ingredients");
  const devicesContainer = document.querySelector(".devices");
  const ustensilsContainer = document.querySelector(".ustensils");

  ingredientsContainer.innerHTML ="";
  devicesContainer.innerHTML = "";
  ustensilsContainer.innerHTML = "";


  const ingArray = [];
  const ustArray = [];
  const deviceArray = [];
  data.forEach(el=>{
    el.ingredients.forEach(ing => ingArray.push(ing.ingredient));
    el.ustensils.forEach(ust => ustArray.push(ust));
    deviceArray.push(el.appliance);
  });
  const uniqueIng = new Set(ingArray.sort());
  const uniqueUst = new Set(ustArray.sort());
  const uniqueDevice = new Set(deviceArray.sort());

  const ingredientArr = [...uniqueIng];
  console.log(ingredientArr);
  const ustensilsArr = [...uniqueUst];
  const deviceArr = [...uniqueDevice];
  ingredientArr.forEach(ing =>{
    let tagName = document.createElement("li");
    tagName.innerHTML = `<li class="dropdown-item">${ing}</li>` ;
    ingredientsContainer.append(tagName);
  });
  console.log(deviceArr);
  deviceArr.forEach(dev =>{
    let tagName = document.createElement("li");
    tagName.innerHTML = `<li class="dropdown-item">${dev}</li>` ;
    devicesContainer.append(tagName);
  });
  ustensilsArr.forEach(ust =>{
    let tagName = document.createElement("li");
    tagName.innerHTML = `<li class="dropdown-item">${ust}</li>` ;
    ustensilsContainer.append(tagName);
  });
}
