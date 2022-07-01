// calculadora básica com switch

function calculadoraBasica (n1, n2) {
    let soma = n1+n2; 
    let multiplicacao = n1*n2
    switch (n1,n2) {
        case soma:
            break;
        case multiplicacao:
            break;
        default:'Ainda não ultilizamos isso aqui. '
            break;
    }
    console.log(multiplicacao)
}

console.log(calculadoraBasica(2, 1))