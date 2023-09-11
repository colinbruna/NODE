const inquirer = require('inquirer');

inquirer
    .prompt([
        { name: 'nota1', message: 'Qual a primeira nota?' },
        { name: 'nota2', message: 'Qual a segunda nota?' },
    ])
    .then((answers) => {
        console.log(answers)
        const media = (parseInt(answers.nota1) + parseInt(answers.nota2)) / 2

        console.log(`A média do aluno é ${media}`)
    })
    .catch((err) => {
        console.log(err)
    })

//ATENÇÃO AO BAIXAR - outras versões estão dando problema
//LINHA DE COMANDO
//npm install inquirer@^8.0.0