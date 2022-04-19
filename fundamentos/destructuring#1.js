// destructring 01 / novo do ECMA 2015


const pessoa = {
    nome: 'Ana', 
    idade: 18, 
    endereco: {
        logradoro: 'Rua abc', 
        numero: 1000
    }
}

const { nome, idade } = pessoa; 
console.log(nome, idade);

const {nome: user , idade: i} = pessoa; 
console.log(user, i); 

// objeto que não existe
const {sobrenome, estado = true} = pessoa; 

console.log(sobrenome, estado)