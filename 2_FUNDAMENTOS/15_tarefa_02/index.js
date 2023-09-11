const inquirer = require('inquirer');
const chalk = require("chalk");

inquirer
    .prompt([
        { name: 'nome', message: 'Digite o nome do usuário?' },
        { name: 'idade', message: 'Digite a idade do usuário?' },
    ])
    .then((answers) => {
        if (!answers.nome || !answers.idade) {
            throw new Error('O nome e a idade são obrigatórios!');
        }
        const response = `o nome do usuário é ${answers.nome} e a idade é ${answers.idade} anos`;
        console.log(chalk.bgYellow.black(response));
    })
    .catch((err) => {
        console.log(err)
    })
