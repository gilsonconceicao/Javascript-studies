// function callback 

const notas = [6.4, 4.8, 8.1, 7.3, 4.2, 3.3, 9.7, 2.8, 10, 8.4]; 

const getApproved = notas.filter(approved => approved >= 7); 
console.log('Aprovados:',getApproved); 

const getFailed = notas.filter(failed => failed < 7)
console.log('Reprovados:',getFailed); 