var formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit",checkout);

async function checkout(e)
{
    e.preventDefault();

    alert("Your order is accepted");
    
    //Order Being Cooked
    var myPromise = new Promise(function(reslove,reject){
        setTimeout(function(){
            reslove("Your order is being cooked");
        },3000);
        
    })
    .then(function(res){
        alert(res);
    })
    .catch(function(err){
        console.log(err);
    });

    //Order is Ready
    var myPromise = new Promise(function(reslove,reject){
        setTimeout(function(){
            reslove("Your order is ready");
        },8000);
        
    })
    .then(function(res){
        alert(res);
    })
    .catch(function(err){
        console.log(err);
    });

    //Out for Delivery
    var myPromise = new Promise(function(reslove,reject){
        setTimeout(function(){
            reslove("Out for delivery");
        },10000);
        
    })
    .then(function(res){
        alert(res);
    })
    .catch(function(err){
        console.log(err);
    });

    //Order Delivered
    var myPromise = new Promise(function(reslove,reject){
        setTimeout(function(){
            reslove("Order Delivered");
        },12000);
        
    })
    .then(function(res){
        alert(res);
    })
    .catch(function(err){
        console.log(err);
    });
    
}