var loginButton = document.querySelector("form");
loginButton.addEventListener("submit",logIn);

var userList = JSON.parse(localStorage.getItem("USERDATA")) || [];


function logIn(e)
{
    e.preventDefault();
    var on_email = document.getElementById("email").value;
    var on_password = document.getElementById("password").value;
    var flag = false;
    
    userList.map(function(elem){
        console.log(elem.email,on_email);
        console.log(elem.password,on_password);
        if((elem.email == on_email) && (elem.password == on_password))
            flag = true;     
    })

    if(flag)
    {
        alert("Login Successful");
        window.location.href = "index.html"
    }
    else
        alert("Wrong Credentials");

}