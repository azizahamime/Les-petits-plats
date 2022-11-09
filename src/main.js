import "../scss/style.scss";
import "bootstrap";
import "../node_modules/axios/dist/axios.min.js";
function getDonnees() {
  axios.get("../data/recipes.js").then((res)=>console.log(res.data)).catch((error)=>console.log(error));
  
  
}
getDonnees();