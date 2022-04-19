
const peso1 = 1.0; 
// ou 
const peso2 = Number('2.0');

console.log(peso1, peso2); 
console.log(Number.isInteger(peso1)); 

const avaliacao01 = 9.871; 
const avaliacao02 = 6.871; 

const total = avaliacao01 * peso1 + avaliacao02 * peso2; 
const media = total / (peso1 + peso2); 

console.log(media.toFixed(2));
console.log(typeof media);


// realizando exemplos de numbers

const n1 = 10; 
const n2 = Number("7"); 

console.log('Primeiro número: ' + n1, 'segundo número: ' + n2)

const soma = () => {
    console.log(`A soma de ${n1} + ${n2} = ${n1 + n2 }`); 
}
soma(); 
console.log( 'o valor veio de uma: ' + typeof soma)