// nome
// to passando o nome por linha de comando
// node index.js nome=Bruna

console.log(process.argv);

const args = process.argv.slice(2);
console.log(args);

const nome = args[0].split('=')[1];
console.log(nome);

// node index.js nome=Bruna idade=30

const idade = args[1].split('=')[1];
console.log(idade);

console.log(`O nome é ${nome} e tem ${idade} anos.`)
