const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
console.log(args);

const nome = args['nome'];
const profissao = args['profissao'];
console.log(nome, profissao);

console.log(`o nome é ${nome} e a profissão é ${profissao}`)

// vou instalar todos os módulos na raiz do projeto