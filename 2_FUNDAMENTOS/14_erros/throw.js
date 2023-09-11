const x = "10";

//checar se x é um número

if (!Number.isInteger(x)) {
    throw new Error("Valor de x não é um número inteiro"); //encerra o programa
}

console.log("continuando código")