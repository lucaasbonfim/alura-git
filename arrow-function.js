// => Arrow Function

function apresentar(nome) {
    return `meu nome é ${nome}`;
}

const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (n1, n2) => n1 + n2;

//Arrow function com + de 1 linha

const somaNumerosPequenos = (n1, n2) => {
    if (n1 > 10 || n2 > 10) {
        return "somente números de 1 a 9";
    } else {
        return n1 + n2;
    }
}

// Hoisting: arrow function se comporta como expressão