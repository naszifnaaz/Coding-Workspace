const app = require('./index');
const connect = require('./configs/db');

app.listen(5000, async (req, res) => {
    try{
        await connect();
        console.log('Conenction established!');
    }
    catch(err)
    {
        console.log('Something went wrong!')
    }
});