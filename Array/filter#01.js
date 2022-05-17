// entendendo e praticando filter em javascript 

const products = [
    {nome: 'Notebook', preco: 3778, fragil: true}, 
    {nome: 'ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.54, fragil: true}, 
    {nome: 'Prato de plástico', preco: 10.00, fragil: false}
]

console.log('Produtos caros: '); 

const caro = produto => produto.preco >= 500; 
const fragil = fragilProduct => fragilProduct.fragil


console.log(products.filter(caro).filter(fragil))