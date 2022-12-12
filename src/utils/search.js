// importer la fonction displayRecipe
import { displayRecipe } from "../main.js";
import { displaytags } from "./displayTags.js";


/**
 * @param {array} data 
 * @param { string} word 
 * chercher word dans nom,ingredients et la description dans le tableau de recettes array et afficher les recettes correspondantes sinon afficher un message
*/
export function searchRecipe(data, word){
	let arrayAfterFilter = [];
	const recipeSection = document.querySelector(".recipes_container");
	const message = document.querySelector(".message-norecipes");

	if (word.length < 3){
		// si le nombre de caractére est < 3 afficher toute les recettes
		recipeSection.innerHTML ="";
		message.style.display = "none";

		displayRecipe(data);
		displaytags(data);
	}  
	function ingredientFound (el,word){
		let ingredients = el.ingredients;
		let value = false;

		for (let j=0; j<ingredients.length;j++){
			if (ingredients[j].ingredient.toLowerCase().includes(word.toLowerCase())){
				value = true;
			}
		}
		return value;
	}

	if(word.length >= 3) {
		// filtrer les recettes selon le titre ou la description ou ingredients
		for (let i=0;i< data.length;i++){
			if ( (data[i].name.toLowerCase().includes(word.toLowerCase())) || 
    (data[i].description.toLowerCase().includes(word.toLowerCase())) || (ingredientFound(data[i],word))){
				arrayAfterFilter.push(data[i]);
			}
		}
		console.log(arrayAfterFilter);

		//s'il y a pas une recette qui correspond au caractéres recherchés afficher un message sino afficher les recettes
		if (arrayAfterFilter.length === 0) {
			displaytags(data);
			message.style.display = "block";
			recipeSection.innerHTML =""; 
		} else {
			recipeSection.innerHTML = "";
			message.style.display = "none";
			displayRecipe(arrayAfterFilter);
			displaytags(arrayAfterFilter);
		}
	} 
	
}