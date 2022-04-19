// fruta no local 

let fruitName = 'melancia'; 
let msgFruit = ''
switch (fruitName) {
    case 'maçã':
        msgFruit = 'Não vendemos essa fruta aqui'; 
        break;
    case 'kiwi': 
        msgFruit = 'Estamos com escassez de kiwi';
        break; 
    case 'melancia': 
        msgFruit = 'Aqui está, são 3 reais o quilo'; 
        break
    default: 'ops, infelizmente não temos essa fruta'
        break;
}

console.log(msgFruit)