/**
 * 
 * @param {array} data 
 * @returns {HTMLElement} getRecipeCard
 */
export function recipeFactory(data) {
  const {name, time, ingredients, description} = data;
  function getRecipeCard() {
    //creer la colonne
    const column = document.createElement("div");
    column.classList.add("col");
    //creer figure qui contient le contenu de la recette
    const figure = document.createElement("figure");
    figure.classList.add("rounded","card","h-100");
    column.append(figure);
    //creer la baniére de la recette
    const photo = document.createElement("div");
    photo.classList.add("photo", "w-100","card-img-top");
    figure.append(photo);

    // creer le contenu de la recette
    const figcaption = document.createElement("figcaption");
    figure.append(figcaption);
    figcaption.classList.add("card-body");
    const recipeHeader = document.createElement("div");
    recipeHeader.classList.add("recipe_header","p3","d-flex","card-title");
    //ajouter le titre
    const recipeTitle = document.createElement("h4");
    recipeTitle.classList.add("recipe_title");
    recipeTitle.innerHTML = `${name}`;
    recipeHeader.append(recipeTitle);
    //ajouter le time
    const timer = document.createElement("div");
    timer.classList.add("recipe_time");
    timer.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z"/>
      </svg>
      <span > ${time} min</span>
    `;
    recipeHeader.append(timer);
    figcaption.append(recipeHeader);
    //contenu recette
    const descriptionContent = document.createElement("div");
    descriptionContent.classList.add("description","p-3","card-text","d-flex");
    figcaption.append(descriptionContent);
    //container ingredient
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList.add("recipe_ingredient");
    ingredients.forEach(ingredient => {
      const recipeIng = document.createElement("p");
      recipeIng.innerHTML = `
        <span class="ingredient_title">${ingredient.ingredient}</span> ${ingredient.quantity ? ":"+ ingredient.quantity : ""} ${ingredient.unit ? ingredient.unit : "" } 
      `; 
      recipeIngredients.append(recipeIng);
    });
    descriptionContent.append(recipeIngredients);
    //container recette description
    const recipeDescription = document.createElement("div");
    recipeDescription.classList.add("recipe_description");
    recipeDescription.innerHTML = `${description}`;
    descriptionContent.append(recipeDescription);

    return column;
  }

  return {getRecipeCard}
}