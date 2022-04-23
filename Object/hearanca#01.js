//  

const ferrari = {
    modelo: 'F56', 
    velMax: '354'
}

const volvo = {
    modelo: 'F56', 
    velMax: '200'
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto); 
console.log(Object.prototype, MeuObjeto.prototype)