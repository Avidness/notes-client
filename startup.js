let chalk = require('chalk');
let figlet = require('figlet');

figlet('ToolShed', {
    font: 'epic'
},function(err, data){
    if(err){
        console.log(chalk.red("Problem displaying startup text..."));
    }else{
        console.log(chalk.cyan(data));
    }
})