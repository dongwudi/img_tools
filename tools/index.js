const program = require('commander');
const chalk = require('chalk');

async function run() {
    program
        .version(await require('../package.json').version)
        .option('-c, --compress','compress pictures')

    program.on('--help',() => {
        console.log(
            chalk.green(
                'this is a img tool'
            )
        )
    });
    
    program
        .command('wh')
        .option('-d , --dirname <name>','rename the img with width and height')
        .action(function(option){
            require('./wheight')(option.dirname)
        })

    program.parse(process.argv);
}

run()