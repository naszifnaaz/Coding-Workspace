import { mult } from "./calc";
import "../index.css";

//add function
function add(first, second) {
  return first + second;
}
console.log(add(5, 5));
console.log(mult(5, 5));
const h1 = document.createElement("h1");
h1.innerHTML = "Webpack";
h1.setAttribute("class", "redtext");
document.getElementById("root").appendChild(h1);
