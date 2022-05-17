// Entendendo e praticando o reduce JS

const alunos = [
    { nome: 'João', nota: 7.2, bolsista: false }, 
    { nome: 'Jorge', nota: 8 , bolsista: true }, 
    { nome: 'Ana', nota: 9, bolsista: false }, 
    { nome: 'Maria', nota: 6.0, bolsista: true }
]
console.log(alunos.map( a => a.nota ))
const result = alunos.map( a => a.nota ).reduce((anterior, atual) => {
    console.log('Anterior', anterior, 'atual', atual); 
    return anterior + atual
})