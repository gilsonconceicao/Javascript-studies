// Entendendo o array 
const myProduct = [22, 33, 44, 55, 90]; 

// for de repetição com resultado 
// maneira na qual escreve mais

// methods 

const soma10 = num => num + 10; 
const triplo = num => num * 3;
const converterMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}` 
const result = myProduct.map(soma10).map(triplo).map(converterMoney)

console.log(result)