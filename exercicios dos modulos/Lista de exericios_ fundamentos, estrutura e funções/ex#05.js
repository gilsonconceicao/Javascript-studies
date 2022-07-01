/*
Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
*/

function etapa01 (capitalInicial, taxaJuros) {
    return `${capitalInicial / 2 + taxaJuros}`
}

console.log('Aplicação + taxa solida:',etapa01(3000, 40)); 


function etapa02 (capitalInicial, taxaJuros) {
    return `${capitalInicial / 2 + taxaJuros*2}`
}

console.log('Aplicação + taxa dupla:',etapa02(3000, 40)); 
