// Imperativo vs declarativo 

const alunos = [
    {nome: 'Junior', nota: 7.8}, 
    {nome: 'Gilson', nota: 7.0}
]

// imperativo 
let total = 0; 
for (let i = 0 ; i < alunos.length ; i++) {
    total += alunos[i].nota
}
console.log('Imperativo:', total / alunos.length); 

// Declarativo 
const getNota = getnota => getnota.nota; 
const soma = (resultado, atual) => resultado + atual; 

const method = alunos.map(getNota).reduce(soma);
console.log('Declarativo:', method / alunos.length)