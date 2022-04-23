const exempleObject = {
    nome: 'Junior', 
    idade: 17, 
    endereco: {
        rua:'aqui onde eu moro', 
        cidade: 'SP'
    }
}

// obter chaves de um objeto 
console.log(Object.keys(exempleObject)); 
// obter valores do objeto 
console.log(Object.values(exempleObject)); 
// obter chaves + valores
console.log(Object.entries(exempleObject)); 
// obter chaves + valores com forEach
const listObject = Object.entries(exempleObject); 
listObject.forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
}); 

// concatenar mais de um objeto 

let type = {type: 'Produto'}; 
let nomeDoProduto = {nome: 'Monitor'}; 
let precoDoProduto = {preco: 'R$ 1.000,00'}; 

console.log(Object.assign(type, nomeDoProduto, precoDoProduto))