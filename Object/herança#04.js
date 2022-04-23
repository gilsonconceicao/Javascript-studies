// herança por função 

function MeuObject () {}
const obj1 = new MeuObject
const obj2 = new MeuObject

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObject.prototype === obj1.__proto__ )
//
MeuObject.prototype.nome = 'Marcos' 
MeuObject.prototype.falar = function (){
    console.log(`Bom dia, seu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObject.prototype; 
obj3.nome = 'Obj3'
obj3.falar()


// Resumo dessa loucura 
/*
console.log((new MeuObject).__proto__ === MeuObject.prototype); 
console.log(MeuObject.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
*/