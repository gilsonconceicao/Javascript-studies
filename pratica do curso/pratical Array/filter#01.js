// Praticando method filter 

const products = [
    {nome: 'Notebook', preco: 4199.22, disponivel: true}, 
    {nome: 'Monitor', preco: 759.81, disponivel: false}, 
    {nome: 'Gabinete', preco: 1700.83, disponivel: true}, 
    {nome: 'Mouse', preco: 31.00, disponivel: false}, 
    {nome: 'HeadPhone', preco: 690.90, disponivel: true}
]

// disponível!?
const available = products.filter(e => e.disponivel); 
console.log('Produtos disponível:',available)

// maior preco 
const priceBigger = products.filter(priceAdd => priceAdd.preco > 3000); 
console.log('Maior preço:',priceBigger)