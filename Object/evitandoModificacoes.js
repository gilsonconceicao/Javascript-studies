// Metodos para privar alguns metodos

//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Aleatorio', 
    preco: 5.00, 
    cartaz: 'não tem promoção' 
}); 

console.log('Extensível:', Object.isExtensible(produto))

console.log(produto); 

// não pode ser adicionado nem modificado 
produto.desconto = 0.02
console.log(produto)

// apenas pode excluir o que está definido 
delete produto.nome; 
console.log(produto);


// Object.seal

const pessoa = {
    nome: 'Junior', 
    idade: 17
}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Santos'
delete pessoa.nome
pessoa.idade = 18
console.log(pessoa)

//Object.freeze = selado + values constantes

const cars  = {
    nome: 'BMW X6', 
    preco: 700.000
}

Object.freeze(cars); 

cars.nomeDoDono = 'Junior'

console.log(cars)