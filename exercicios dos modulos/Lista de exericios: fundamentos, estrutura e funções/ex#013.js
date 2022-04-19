// Lanchonete

function lanchonete(códigoDoPedido, quantidade) {
    switch (códigoDoPedido) {
        case 100:
            return quantidade * 3.00 
        case 200: 
            return quantidade * 4.00
        case 300: 
            return quantidade * 5.50
        case 400: 
            return quantidade * 7.50
        case 500: 
            return quantidade * 3.50
        case 600:
            return quantidade * 2.80
        default: 'Lamento não vendemos esse lanche aqui. '
            break;
    }
}

console.log(lanchonete(100, 2))
console.log(lanchonete(200, 1))
console.log(lanchonete(300, 4))
console.log(lanchonete(400, 6))
console.log(lanchonete(500, 2))
console.log(lanchonete(600, 3))
