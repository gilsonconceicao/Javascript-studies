// Desafio 
const alunos = [
    { nome: 'João', nota: 7.2, bolsista: true }, 
    { nome: 'Jorge', nota: 8 , bolsista: false }, 
    { nome: 'Ana', nota: 9, bolsista: true }, 
    { nome: 'Maria', nota: 6.0, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsista? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista; 
console.log(alunos.map(e => e.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?

const checkedState = alunos.map(e => e.bolsista).reduce((nome, bolsa) => nome + bolsa); 
console.log(checkedState, 'são bolsistas!')