const app = require('./index');
const connect = require('./configs/db');
const masterAccountController = require('./controllers/masteraccount.controller');
const savingsAccountController = require('./controllers/savingsaccount.controller');
const fixedAccountController = require('./controllers/fixedaccount.controlller');

app.use('/masteraccounts', masterAccountController);
app.use('/savingsaccounts', savingsAccountController);
app.use('/fixedaccounts', fixedAccountController);

app.listen(5000, async () => {
    try{
        await connect();
        console.log("Connection established at port 5000");
    }
    catch(err)
    {
        console.log("Something went wrong");
    }
});