/*
Cadeia de protótipos 
exemplo: avo, pai e filho 
prototype chain;
*/ 
Object.prototype.attr0 = '0' //não fazer isso pois és a ultima referência

const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B'}
const filho = {__proto__:pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3); 


const carro = {
    velAtual: 0, 
    velMax: 200, 
    AcelerarMais (delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += this.velMax
        } else {
            this.velMax = this.velMax
        }
    }, 
    status() {
        return `Está em ${this.velAtual}Km/h de ${this.velMax}Km/h`; 
    }
}

const ferrari = {
    modelo: 'Z7', 
    velMax: 300, //shadowing
}

const volvo = {
    modelo: 'V9',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro); 
Object.setPrototypeOf(volvo, carro);

volvo.AcelerarMais(0); 
console.log(volvo.status())

ferrari.AcelerarMais(10)
console.log(ferrari.status())