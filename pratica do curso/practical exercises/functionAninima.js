// function anonima

const soma = (n1) => {
    return function(n2) {
        return n1 + n2
    }
}
console.log(soma(4)(5))