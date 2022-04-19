// classe
// return function

class personUser {
    constructor(firstName) {
        this.nome = firstName; 
    }
    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}
const p1 = new personUser('Junior'); 
p1.falar()

// com factory

function lastName (nome) {
    return {
        falarLastName() {
            console.log(`Seu sobrenome é ${nome}`)
        }
    }
}
const p2 = lastName('Santos'); 
p2.falarLastName()