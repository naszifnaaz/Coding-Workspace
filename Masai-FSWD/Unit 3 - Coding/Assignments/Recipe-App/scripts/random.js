import navbar from "../components/navbar.js";

let nav_container  = document.getElementById("nav-container");
nav_container.innerHTML = navbar();

let parent = document.getElementById("random-container");

async function randomRecipe()
{
    let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await res.json();
    data = data.meals[0];
    console.log(data);

    let container = document.createElement("div");
    container.setAttribute("id","container");

    let left = document.createElement("div");
    left.setAttribute("class","left");

    let right = document.createElement("div");
    right.setAttribute("class","right");

    let thumbnail = document.createElement("img");
    thumbnail.setAttribute("class","thumbnail");
    thumbnail.setAttribute("src",data.strMealThumb);
    console.log(data.strMealThumb);

    let title = document.createElement("p");
    title.setAttribute("class","title");
    title.innerHTML = data.strMeal;


    let instructions  = document.createElement("p");
    instructions.setAttribute("class","instruction");
    instructions.innerHTML = "Instructions"
    let desc = document.createElement("p");
    desc.setAttribute("class","desc");
    desc.innerHTML = data.strInstructions;

    left.append(thumbnail,title);
    right.append(instructions,desc);

    container.append(left,right);
    parent.append(container);

}


randomRecipe();