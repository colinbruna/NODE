const path = require('path');

//path absoluto
console.log(path.resolve('test.txt'));

//formar path
const midFolder = "relatorios";
const filename = "bruna.txt";

const finalPath = path.join('/', 'arquivos', midFolder, filename);

console.log(finalPath);