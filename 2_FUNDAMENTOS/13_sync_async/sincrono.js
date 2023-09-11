const fs = require("fs");

console.log('Início');

fs.writeFileSync('arquivo.txt', 'oi');

console.log('Fim');

// síncrona: o código espera ser totalment executado para prosseguir
