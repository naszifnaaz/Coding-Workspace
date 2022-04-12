// Restuarent CLI using inquirer.

var inquirer = require("inquirer");
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "enter username",
      name: "username",
    },
    {
      type: "password",
      message: "enter password",
      name: "password",
    },
    {
      type: "password",
      message: "enter password",
      mask: "*",
      name: "confirm",
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    if (answers.password == answers.confirm) {
      console.log(`welcome, ${answers.username}`);
      inquirer
        .prompt([
          /* Pass your questions in here */
          {
            type: "list",
            message: "choose order type",
            choices: ["delivery", "pickup"],
            name: "ordertype",
          },
        ])
        .then((answers) => {
          // Use user feedback for... whatever!!
          if (answers.ordertype === "delivery") {
            inquirer
              .prompt([
                /* Pass your questions in here */
                {
                  type: "input",
                  message: "enter address for delivery",
                  name: "address",
                },
              ])
              .then((answers) => {
                // Use user feedback for... whatever!!
                inquirer
                  .prompt([
                    /* Pass your questions in here */
                    {
                      type: "confirm",
                      message: `is ${answers.address} the valid address`,
                      name: "confirmaddress",
                    },
                  ])
                  .then((answers) => {
                    // Use user feedback for... whatever!!
                    inquirer
                      .prompt([
                        /* Pass your questions in here */
                        {
                          type : "checkbox",
                          choices: [
                            "pizza",
                            "burger",
                            "fries",
                            "coke"
                          ],
                          name : "orders"
                        }
                      ])
                      .then((answers) => {
                        // Use user feedback for... whatever!!
                        console.log(`{${answers.orders}} order placed successfully`);
                      });
                  });
              });
          }
        });
    } else {
      console.log("passord does not match");
    }
  });
