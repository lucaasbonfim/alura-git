function minhaFuncao (param) {
    //bloco de código
}

minhaFuncao("param");

// expressão de função

// erro de referência causado pois a expressão função não pode ser declarada depois de usar
// console.log(soma(2,3));
const soma = function(n1, n2) {return n1 + n2};
console.log(soma(5, 12));

// diferença principal

console.log(apresentar());

function apresentar() {
    return "olá";
}