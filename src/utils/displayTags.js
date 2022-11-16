export function displaytags(data,filters){
  const ingredientsContainer = document.getElementById("tagsContainer");
  const tagsArray =[];
  filters = "appareils";
  if(filters === "ingredients"){
    data.forEach(element => {
      element.ingredients.forEach(ing=>{
        tagsArray.push(ing.ingredient);   
      }); 
    });
  } else if(filters ==="ustensiles"){
    data.forEach(element => {
      element.ustensils.forEach(ust=>{
        tagsArray.push(ust);   
      }); 
    });
  } else if(filters === "appareils"){
    data.forEach(element => {
      tagsArray.push(element.appliance); 
    });
  }
  console.log(tagsArray);
  const uniqueIng = new Set(tagsArray.sort());
  const tagArray =[...uniqueIng];
  console.log(tagArray);
  if (filters === "ingredients"){
    tagArray.forEach(element=>{
      let tagName = document.createElement("li");
      tagName.innerHTML = `<li class="dropdown-item">${element}</li>` ;
      ingredientsContainer.append(tagName);
    });
  } else if(filters === "ustensiles"){
    tagArray.forEach(element=>{
      let tagName = document.createElement("li");
      tagName.innerHTML = `<li class="dropdown-item">${element}</li>` ;
      ingredientsContainer.append(tagName);
    });
  } else if(filters ==="appareils"){
    tagArray.forEach(element=>{
      let tagName = document.createElement("li");
      tagName.innerHTML = `<li class="dropdown-item">${element}</li>` ;
      ingredientsContainer.append(tagName);
    });
  }
}