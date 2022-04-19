// notação ponto 
console.log(Math.ceil(6.1));


const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome); 

function Obj(nome) {
    this.nome = nome; 
}

const obj02 = new Obj('Cadeira'); 
const obj03 = new Obj('Bola de Futebol'); 
console.log(obj02.nome); 
console.log(obj03.nome); 