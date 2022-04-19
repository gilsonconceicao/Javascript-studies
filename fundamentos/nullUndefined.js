// trabalhando com referência de um espaço de memório 

var valor; // undefined - indeinida 
console.log(valor); 

valor = null; // ausência de valor 
console.log(valor); 

const produto = {}; 
console.log(produto.preco); 
console.log(produto); 

produto.preco = 5.38; 
console.log(produto); 

produto.preco = undefined; // sempre evite usar; 

console.log(!! produto.preco ); 
console.log(produto); 

produto.preco = null; // sem preço 
console.log(!!produto.preco); 
console.log(produto)