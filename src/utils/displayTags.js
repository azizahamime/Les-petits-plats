export function displaytags(data){
  const ingredientsContainer = document.getElementById("tagsContainer");
  ingredientsContainer.innerHTML ="";
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
}
