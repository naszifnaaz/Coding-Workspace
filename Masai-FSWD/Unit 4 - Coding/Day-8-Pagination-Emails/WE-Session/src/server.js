const app = require('./index');

const connect = require('./configs/db.js');

const productController = require('./controllers/product.controllers');


app.use('/products', productController);

app.listen(5000, async () => {
    try{
        await connect();
        console.log("Connection established");
    }
    catch(err)
    {
        console.log("Something went wrong!");
    }
    
})