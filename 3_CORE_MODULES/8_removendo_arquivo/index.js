const fs = require('fs');

fs.unlink('arquivo.txt', function (err) {
    if (err) {
        console.log(err.message); //cai aqui caso não tenha o arquivo.txt criado
        return;
    }

    console.log('Arquivo removido!');
})

//deve remover o arquivo.txt