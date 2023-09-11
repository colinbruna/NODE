//mais de um valor

const x = 10;
const y = 'João';
const z = [1, 2];

console.log(x, y, z);

//contagem de impressões
for (let i = 0; i < 10; i++) {
    console.count(`contagem`)
}
console.count();

//variável entre string
console.log("%s", y);
console.log("O nome é %s e ele é programador", y);
console.log(`O nome é ${y} e ele é programador`); //forma mais atual

//limpar console
setTimeout(() => {
    console.clear()
}, 2000);
