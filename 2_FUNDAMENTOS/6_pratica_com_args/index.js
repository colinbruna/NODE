const minimist = require("minimist");
const soma = require('./soma').soma;

// externo
let args = minimist(process.argv.slice(2));

//interno
soma(2, 2);

args = minimist(process.argv.slice(2));

const a  = parseInt(args['a']);
const b  = parseInt(args['b']);

soma(a ,b);

// linha de comando: node .\index.js --a=10 --b=15
