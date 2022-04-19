// call e Apply - preço 

// app preço de produtos 

function getPreco(imposto=0, moeda='R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1+ imposto)}`
}

const produto01 = {
    nome: 'Notebook', 
    preco: 2100, 
    desc: 0.1, 
    getPreco
}

console.log(getPreco.apply(produto01))