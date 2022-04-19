// call e applay

function getPreco (imposto=0, moeda='R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`; 
}

const produto01 = {
    nome: 'Notebook', 
    preco: 4882, 
    desc: 0.01, 
    getPreco
}

console.log(getPreco.apply(produto01,)) 
// para mudar os parâmetro adicione após a vírgula [3, '$']

const produto02 = {
    nome: 'Smartphone', 
    preco: 2200, 
    desc: 0.03, 
    getPreco 
}

console.log(getPreco.call(produto02, ));
// para mudar não é necessário as [] 
