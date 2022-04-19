// definindo array

const valores = [1,2,5,8]; 
console.log(valores); 
console.log(valores[0], valores[1], valores[2]);
console.log(valores.length); 

valores.push(4);
valores.push(3); 
valores.push(6); 
valores.push(7);
valores.sort(); 

console.log(valores);
delete valores[0]; 
console.log(valores); 

console.log(typeof valores); 