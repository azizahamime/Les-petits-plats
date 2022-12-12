import { filter,tags } from "./filterTag";
import { recipes } from "../../data/recipes";

const  tagsContainer = document.getElementById("tags");

/**
 * @param {HTMLElement} arg 
 * si le tag n'hexiste pas on le crée sinon on fait rien
*/
export function addTags(arg){
	const tags = Array.from(document.querySelectorAll(".tag"));
	if (tags.length === 0){
		createTag(arg);
	} else {
		let state = false;
		tags.forEach(tag =>{
			if (tag.textContent === arg.textContent){
				state = true;
			}
		});
		if(!state){
			createTag(arg);
		}
	}

	/**
   * @param {HTMLElement} arg 
   * creation de tag au click sur un element des liste d'ingredient ou d'ustensils ou d'appareil
  */
	function createTag(arg){
		const tag = document.createElement("div");
		tag.classList.add("tag");
		if(arg.parentNode.classList.contains("ingredients")){
			tag.classList.add("bg-primary","ingredientTag");
		} else if(arg.parentNode.classList.contains("appliances")){
			tag.classList.add("bg-success","applianceTag");
		}else if (arg.parentNode.classList.contains("ustensils")){
			tag.classList.add("bg-danger","ustensilTag");
		}
		arg = arg.textContent;
		tag.textContent = arg;
		const close = document.createElement("img");
		close.setAttribute("src","../../assets/close.svg");
		close.setAttribute("alt","close tag");
		close.classList.add("close");
		close.onclick = deleteTags;
		tag.append(close);
  
		tagsContainer.append(tag);
	} 
}

/** 
 * @param {HTMLEvent} e 
 * au click sur "X" des tag on supprime le tag et on fait la mise a jour des recettes
*/
function deleteTags(e){
	const tag = e.target.parentNode;
	const tagRemove = tag.textContent; 
	
	if (tag.classList.contains("ingredientTag")){
		const index = tags.ingredients.indexOf(tagRemove);
		tags.ingredients.splice(index,1);
		filter(recipes,tags);
		tag.remove();
	} 
	if (tag.classList.contains("applianceTag")){
		const index = tags.appliances.indexOf(tagRemove);
		tags.appliances.splice(index,1);
		filter(recipes,tags);
		tag.remove();
	} 
	if (tag.classList.contains("ustensilTag")){
		const index = tags.ustensils.indexOf(tagRemove);
		tags.ustensils.splice(index,1);
		filter(recipes,tags);
		tag.remove();
		
	}     

}