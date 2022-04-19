// pratica de object and JS

const produto = {}; 

produto.nome = 'Monitor';
produto.preco = 1000; 
produto.desconto = 20.0
produto.precoFinal = produto.preco - produto.desconto; 

console.log('Nome do produto: ' + produto.nome); 
console.log('Preço: ' + produto.preco); 
console.log('Desconto: ' + produto.desconto); 
console.log('Total a pagar: ' + produto.precoFinal)