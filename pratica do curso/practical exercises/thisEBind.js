const person = {
    saudacao: 'Bom dia!', 
    falarSaudacao() {
        console.log(this.saudacao); 
    }
}

const getPerson = person.falarSaudacao.bind(person); 
getPerson()