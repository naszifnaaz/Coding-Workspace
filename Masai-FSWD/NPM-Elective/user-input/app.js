//Passing Arguments in command line

const { Command } = require('commander');
const program = new Command();

program
    .version('0.1.0')
    .argument('<username>', 'user to login')
    .argument('[password]', 'password for user, if required', 'no password given')
    .action((username, password) => {
        console.log('username:', username);
        console.log('password:', password);
    })

program.parse(process.argv);