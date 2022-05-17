// Percorrendo JSON

const product = [
    '{"nome": "Monitor", "preco": 1000}', 
    '{"nome": "Gabinete", "preco": 1.300}', 
    '{"nome": "Mesa", "preco": 350}', 
    '{"nome": "Celular", "preco": 1.900}'
]

// methods // get name or price the object 

const formaterObject = json => JSON.parse(json); 
const getPrice = getName => getName.nome; 

console.log(product.map(formaterObject).map(getPrice))