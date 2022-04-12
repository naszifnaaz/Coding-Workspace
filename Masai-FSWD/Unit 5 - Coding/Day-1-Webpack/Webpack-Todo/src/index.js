import "./index.css";
import logo from "./logo.png";

let pic = document.createElement("img");
pic.setAttribute("src", logo);

let root = document.getElementById("root");
let todo = document.createElement("input");
todo.setAttribute("type", "text");
todo.setAttribute("id", "form");
todo.setAttribute("required", "true");

let button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("id", "button");
button.setAttribute("value", "Add Todo");

let lists = document.createElement("ul");

button.onclick = () => {
  let task = document.getElementById("form").value;
  console.log(task);
  let list = document.createElement("li");
  list.innerHTML = task;
  lists.append(list);
};

root.append(pic, todo, button, lists);
