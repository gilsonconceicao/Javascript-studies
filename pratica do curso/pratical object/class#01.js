
class Person {
    constructor (nome) {
        this.nome = nome
    }

    set name (string) {
        this.nome = string
    }

    get name () {
        return this.nome
    }

    walk () {
        return `${this.nome} está andando.`
    }
}

class Developer extends Person {
    constructor(name, codeLanguage) {
        super(name)
        this._codeLanguage = codeLanguage
    } 

    code() {
        return `${this.name} está codando em ${this._codeLanguage}`
    }
}

const brendan = new Developer('Brendan', 'PHP')
console.log(brendan.code())

const junior = new Developer('Junior', 'JS')
console.log(junior.code())