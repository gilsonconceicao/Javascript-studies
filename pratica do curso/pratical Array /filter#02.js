const notasDosAlunos = [1, 4.3, 3.9, 4.1, 5.8, 6.9, 7.2, 8.4, 9.3, 10]

// aprovados 
const aprovados = notasDosAlunos.filter( aprovado => aprovado >= 7 );
console.log('Notas aprovados:', aprovados); 

// reprovados 
const reprovados = notasDosAlunos.filter( reprovado => reprovado < 7 );
console.log('Notas reprovados', reprovados)