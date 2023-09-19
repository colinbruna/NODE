const _ = require('lodash');

const a = [1, 2, 3, 4, 5];
const b = [2, 4, 5, 6, 7];

const diff = _.difference(a, b); //itens do a que não estão no b
const diff1 = _.difference(b, a);

console.log(diff);
console.log(diff1)

// npm install <nome do pacote>
// www.npmjs.com - repositório de pacotes

// para atualizar
// npm update ou npm update <pacote>