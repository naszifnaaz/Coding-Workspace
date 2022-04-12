// Making use of user input using action

const { Command } = require('commander');
const program = new Command();
program.version('0.0.1');

program.argument("<name>", "name to print")
    .argument("[number]", "number of times to print", 1)
    .action(function (name, number) {
        for (let i = 0; i < number; i++) {
            console.log(name);
        }
    })

program.parse(process.argv);