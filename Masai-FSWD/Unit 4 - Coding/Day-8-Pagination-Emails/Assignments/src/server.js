// Importing Express
const app = require('./index');

// Importing Mongoose Connect
const connect = require('./configs/db');


const userController = require('./controllers/user.controller');

app.use('/users',userController);

//Creating a server at port 5000
app.listen(5000, async (req,res) => {
    try{
        await connect();
        console.log("Connection Established!")
    }
    catch(err){
        console.log(err);
    }
})