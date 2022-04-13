const app = require('./index');
const connect = require('./configs/db');


app.listen(5000, async () => {
    try{
        await connect();
        console.log('Connection established!');
    }
    catch(err)
    {
        console.log('Something went wrong!');
        console.log(err.message);
    }
});