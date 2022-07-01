/*
Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

const somaTeste = (moeda) => {
    const number = 0.30000000000000004; 
    return `${moeda}${number.toFixed(2)}`
}

console.log(somaTeste('R$'))
