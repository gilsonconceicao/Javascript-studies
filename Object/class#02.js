// herança e criação de objetos com class

class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor (sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends Pai {
    constructor () {
        super('Santos', 'médico')
    }
}

const filho1 = new filho
console.log(filho1)