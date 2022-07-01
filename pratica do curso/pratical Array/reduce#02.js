// calculando preços de produtos 

const products = [
    {nome: 'Notebook', preco: 4199.22, disponivel: true}, 
    {nome: 'Monitor', preco: 759.81, disponivel: false}, 
    {nome: 'Gabinete', preco: 1700.83, disponivel: true}, 
    {nome: 'Mouse', preco: 31.00, disponivel: false}, 
    {nome: 'HeadPhone', preco: 690.90, disponivel: true}
]

// calcular todos os preços

const getAllPrice = price => price.preco; 
const sumAllPrice = (accumulator, current) => accumulator+current;

const execMethod = products.map(getAllPrice).reduce(sumAllPrice); 
console.log(execMethod)