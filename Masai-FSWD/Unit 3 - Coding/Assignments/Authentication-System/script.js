

// Register User
let Register = async () => {
    try {
        let url = "https://masai-api-mocker.herokuapp.com/auth/register";

        //creating an object
        let registerUser = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            username: document.getElementById("username").value,
            mobile: document.getElementById("mobile").value,
            description: document.getElementById("description").value,
        };

        console.log(registerUser);

        //converting the object to json 
        registerUser = JSON.stringify(registerUser);
        
        // API Call
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: registerUser
        });
        let data = await res.json();
        alert(data.message);
    }

    catch (err) {
        console.log(err);
    }
}

// Login User
let Login = async () => {
    let url = "https://masai-api-mocker.herokuapp.com/auth/login";


    //Grabbing input form data
    let loginDetails = {
        password : document.getElementById("login-password").value,
        username : document.getElementById("login-username").value
    }

    //Converting to JSON
    let loginDetailsJSON = JSON.stringify(loginDetails);

    //Calling API
    let res = await fetch(url , {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : loginDetailsJSON
    });

    let data = await res.json();
    let token = data.token;
    if(data.message)
        alert(data.message);

    userDetails(loginDetails.username,token); 
}


//Showing User Details
let userDetails = async (username,token) => {
    let url = `https://masai-api-mocker.herokuapp.com/user/${username}`;

    try{
        let res = await fetch(url,{
            headers : {
                'Content-type':'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        let data = await res.json();
        if(data.username == username)
        {
            let message = `Welcome ${data.name}`;
            alert(message);
        }
    }
    catch(err)
    {
        console.log(err);
    }
}