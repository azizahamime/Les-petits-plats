export function recipeFactory(data) {
  const {name, time, ingredients, description} = data;
  function getRecipeCard() {
    //creer la colonne
    

    //creer figure qui contient le contenu de la recette
    const figure = document.createElement("figure");
    figure.classList.add("rounded");
    //creer la baniére de la recette
    const photo = document.createElement("div");
    photo.classList.add("photo", "w-100");
    figure.append(photo);

    // creer le contenu de la recette
    const figcaption = document.createElement("figcaption");
    figure.append(figcaption);
    const recipeHeader = document.createElement("div");
    recipeHeader.classList.add("recipe_header","p3","d-flex");
    //ajouter le titre
    const recipeTitle = document.createElement("h4");
    recipeTitle.classList.add("recipe_title");
    recipeTitle.innerHTML = `${name}`;
    recipeHeader.append(recipeTitle);
    //ajouter le time
    const timer = document.createElement("div");
    timer.innerHTML = `
          <i class="fa-regular fa-clock"></i>
          <span class="recipe_time"> ${time} min</span>
    `;
    recipeHeader.append(timer);
    figcaption.append(recipeHeader);
    //contenu recette
    const descriptionContent = document.createElement("div");
    descriptionContent.classList.add("description","p-3","d-flex");
    figcaption.append(descriptionContent);
    //container ingredient
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList.add("recipe_ingredient","w-50");
    ingredients.forEach(ingredient => {
      const recipeIng = document.createElement("p");
      recipeIng.innerHTML = `
        <span class="ingredient_title">${ingredient.ingredient}:</span> ${ingredient.quantity} ${ingredient.unit ? ingredient.unit:"" } 
      `; 
      recipeIngredients.append(recipeIng);
    });
    descriptionContent.append(recipeIngredients);
    //container recette description
    const recipeDescription = document.createElement("div");
    recipeDescription.classList.add("recipe_description");
    recipeDescription.innerHTML = `${description}`;
    descriptionContent.append(recipeDescription);
    return figure;

  }
  return {getRecipeCard}
}