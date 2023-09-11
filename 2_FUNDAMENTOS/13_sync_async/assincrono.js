const fs = require("fs");

console.log('Início');

fs.writeFile('arquivo.txt', 'oi', function (err) {
    setTimeout(function () {
        console.log('Arquivo criado!')
    }, 1000);
});

console.log('Fim'); // não espera o final da função anterior para executar essa linha

// assíncrona: o código continua progredindo, e em um ponto futuro obtém a resposta da função assíncrona
