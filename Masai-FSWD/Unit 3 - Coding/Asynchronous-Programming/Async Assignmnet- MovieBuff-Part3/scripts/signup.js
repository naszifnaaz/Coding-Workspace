var signUpForm = document.querySelector("form").addEventListener("submit",signUp);

var userList = JSON.parse(localStorage.getItem("USERDATA")) || [];


function signUp(e){
    e.preventDefault();
    var name = document.getElementById("name").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        "name" : name,
        "contact" : contact,
        "email" : email,
        "password" : password
    }

    userList.push(user);
    
    localStorage.setItem("USERDATA",JSON.stringify(userList));
    alert("SignUp Successful");
    window.location.href = "login.html";
}