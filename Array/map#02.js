// Desafio de carrinho com map e JSON

const products = [
    '{"nome": "gabinete", "preco": 1500}', 
    '{"nome": "monitor", "preco": 1000}', 
    '{"nome": "mouse", "preco": 50}', 
    '{"nome": "teclado", "preco": 120}'
]

const formatForObject = json => JSON.parse(json); 
const getPrice = price => price.preco; 

const result = products.map(formatForObject).map(getPrice);
console.log(result) 