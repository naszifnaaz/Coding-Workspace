
let timerID;
//Debouncing
let debounce = (func,delay) =>{
    if(timerID)
        clearTimeout(timerID);
    timerID = setTimeout(()=>{
        func();
    },delay);
}



let searchRecipe = async () =>{
    let query = document.getElementById("search").value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    console.log(url);

    let res = await fetch(url);
    let data = await res.json();
    data = data.meals;
    renderResults(data);
}

let parent = document.getElementById("search-results");

function renderResults(data)
{
    parent.innerHTML = "";
    data.map((elem)=>{
        let container = document.createElement("div");
        container.setAttribute("class","result");
        let thumbnail = document.createElement("img");
        thumbnail.setAttribute("class","thumbnail");
        thumbnail.setAttribute("src",elem.strMealThumb);

        let title = document.createElement("p");
        title.setAttribute("class","title");
        title.innerHTML = elem.strMeal;

        parent.style.height = "400px";
        container.style.padding = "10px";
        container.style.border = "1px solid gray";

        container.addEventListener("click",()=>{
            localStorage.setItem("currentRecipe",JSON.stringify(elem));
            window.location.href = "./result.html"
        })

        container.append(thumbnail,title);
        parent.append(container);
    })
}