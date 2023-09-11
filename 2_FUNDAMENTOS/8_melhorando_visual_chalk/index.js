const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
    console.log(chalk.green.bold('Parabéns'));
} else {
    console.log(chalk.bgRed.bold('Recuperação'));
}

//ATENÇÃO AO  BAIXAR - outras versões estão dando problema
//LINHA DE COMANDO
//npm install chalk@4.1.2