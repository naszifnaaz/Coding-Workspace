const app = require('./index');
const connect = require('./configs/db');

app.listen(5000, async () => {
    try{
        await connect();
        console.log('Connection established!');
    }
    catch(err)
    {
        console.log('Error connecting');
    }
});