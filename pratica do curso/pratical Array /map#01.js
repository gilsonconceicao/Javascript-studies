// map #01 - incrementando numeros 

const numbers = [2, 4, 6, 8, 10]; 

// methods 

const soma20 = num => num + 20; 
const menos4 = num => num - 4; 
const formaterMoney = e => `R$${parseFloat(e).toFixed(2).replace('.', ',')}`

// exec map por constantes 
const transformNumbers = numbers.map(soma20).map(menos4).map(formaterMoney); 
console.log(transformNumbers)