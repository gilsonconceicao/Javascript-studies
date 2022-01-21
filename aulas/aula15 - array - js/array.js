
let numeros = [ 2, 4, 6, 8 ]; 

numeros.push(1); 
numeros.push(3); 
numeros.push(5);  
numeros.push(7); 
numeros.sort()

for ( let pos in numeros ) {
    console.log(numeros[pos]); 
}
console.log('O número 4 está na indíce: ' + numeros.indexOf(4)); 
console.log('TOTAL DE NÚMEROS: ' + numeros.length); 