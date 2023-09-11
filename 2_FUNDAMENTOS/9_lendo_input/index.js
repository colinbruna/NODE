const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`Qual sua idade? `, (idade) => {
    console.log(`Minha idade é ${idade}`)
    if (idade >= 18) {
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    readline.close();
});