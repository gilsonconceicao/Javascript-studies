// implementando filter 

Array.prototype.filter2 = function ( callback ) {
    const newArray = []; 
    for (let i = 0 ; i < this.length ; i++) {
        if (callback[i], i, this) {
            newArray.push(this[i]); 
        }
    }
    return newArray
}  

const products = [
    {nome: 'Notebook', preco: 3778, fragil: true}, 
    {nome: 'ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de vidro', preco: 12.54, fragil: true}, 
    {nome: 'Prato de plástico', preco: 10.00, fragil: false}
]

const caro = produto => produto.preco >= 500; 
const fragil = fragilProduct => fragilProduct.fragil


console.log(products.filter2(caro).filter2(fragil))