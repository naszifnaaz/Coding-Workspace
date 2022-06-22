//Importing CSS for bundling
import "./index.css";

//Importing images for bundling
import logo from "./Webpack.png";


let root = document.getElementById("root");

let title = document.createElement("h1");
title.setAttribute("class", "heading");
title.innerHTML = "Hello, Webpack!";

let image = document.createElement("img");
image.setAttribute("src", logo);
image.setAttribute("class", "logo");

root.append(title, image);