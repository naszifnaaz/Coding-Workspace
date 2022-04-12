// Using inquirer which is CLI package


const inquirer = require('inquirer');
inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: "input",
            message: "What is your username ?",
            name: "username"
        },
        {
            type: "password",
            message: "What is your password ?",
            mask: "*",
            name: "password"
        },
        {
            type: "password",
            message: "Confirm your password",
            name : "confirm"
        }
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if(answers.password == answers.confirm) {
            console.log("Welcome,",answers.username);
        }
        else
        {
            console.log("Sorry, your password is not a match! Please try again");
            return;
        }
        inquirer.prompt([
            {
                type : "input",
                message : "enter phone number",
                name : "phone",
                validate(value)
                {
                    if(value.length == 10)
                    {
                        console.log("phone number entered");
                        return true;
                    }
                        
                    else
                        return "Please enter a valid phone number";
                }
            }
        ])
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });