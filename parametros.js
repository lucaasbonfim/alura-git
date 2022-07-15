// parâmetros de função

function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(5, 2));

// parâmetros x argumentos

// ordem dos parâmetros importa

function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana"));

function multiplica(n1, n2) {
    return n1 * n2;
}

console.log(multiplica(soma(2, 3), soma(5, 7)));