

let menu = document.querySelector("#menu");
let counter = document.querySelector("#count");
var cartData = [];

async function getDishes()
{
    try{
    var res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian");
    var data = await res.json();
    data = data.meals;
    renderDishes(data);

    }
    catch(err)
    {
        console.log(err);
    }
    
}

getDishes();

function renderDishes(data)
{
    data.map(function(elem){
        var dishes = document.createElement("div");
        dishes.setAttribute("class","dishes");

        var image = document.createElement("img");
        image.setAttribute("src",elem.strMealThumb);
        image.setAttribute("class","poster");

        var title = document.createElement("p");
        title.setAttribute("class","dish-title");
        title.textContent = elem.strMeal;

        var price = document.createElement("p");
        price.setAttribute("class","dish-price");
        random_price = Math.round(Math.random() * 500);
        price.textContent = `Price : ${random_price}`;

        var button = document.createElement("button");
        button.setAttribute("class","order-btn");
        button.textContent = "Add To Cart";
        button.addEventListener("click",function(){
            cartData.push(elem);
            localStorage.setItem("cart",JSON.stringify(cartData));
            counter.textContent = `ITEMS : ${cartData.length}`;
        });

        dishes.append(image,title,price,button);
        menu.append(dishes);

        
    });
}


