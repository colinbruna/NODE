const x = "10";

//checar se x é um número

try {
    x = 2; // não podemos atribuir outro valor à uma constante
} catch (e) {
    console.error(e.message);
}

console.log("continuando código")