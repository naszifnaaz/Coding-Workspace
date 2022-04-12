let cart = document.querySelector("#cart");
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
let total = document.querySelector("#total");
var amount = 0;
console.log(cartData)
renderData();

function renderData()
{
    cart.innerHTML = "";
    amount = 0;
    cartData.map(function(elem,index){
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
    
        amount += random_price;
        total.textContent = `TOTAL BILL : ${amount}`;
    
        var button = document.createElement("button");
            button.setAttribute("class","delete-btn");
            button.setAttribute("id","remove");
            button.textContent = "Delete From Cart";
            button.addEventListener("click",function(index){
                cartData.splice(index,1);
                console.log(cartData);
                renderData();
            });
    
        dishes.append(image,title,price,button);
        cart.append(dishes);

    
    })
}
