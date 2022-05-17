// implementando map do array 

Array.prototype.map2 = function(callback) {
    let newArray = []; 
    for ( let i = 0 ; i < this.length ; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const products = [
    '{"nome": "gabinete", "preco": 1500}', 
    '{"nome": "monitor", "preco": 1000}', 
    '{"nome": "mouse", "preco": 50}', 
    '{"nome": "teclado", "preco": 120}'
]

const transform = json => JSON.parse(json); 
const getPrice = priceProduct => priceProduct.preco;

const result = products.map2(transform).map2(getPrice); 
console.log(result)