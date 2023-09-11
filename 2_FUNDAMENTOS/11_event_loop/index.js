//EVENT LOOP
//garante que a execução do código seja sequencial
//o código é lido de cima para baixo, garantindo uma execução após a outra

function a() {
    console.log("Executando a()")
}

function b() {
    console.log("Executando b()")
}

function c() {
    console.log("Executando c()")
    a();
    b();
}

// imprime b/ c/a/b /a
b();
c();
a();

//imprime c/a/b
c();