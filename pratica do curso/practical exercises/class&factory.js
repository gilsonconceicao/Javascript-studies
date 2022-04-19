// mesmo código de forma diferente

// class

class retournFirstName {
    constructor (nome) {
        this.firstName = nome; 
    }

    falarNameReturn() {
        console.log('Nome:',this.firstName)
    }
}

const p1 = new retournFirstName('Junior'); 
p1.falarNameReturn(); 

// com factory 

function lastNameFactory(lastName) {
    return {
        falarComFactory() {
            console.log('Sobrenome:',lastName)
        }
    }
}

const p2 = lastNameFactory('Santos')
p2.falarComFactory()