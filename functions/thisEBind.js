// this e a função bind JS

const person = {
    saudacao: 'Boa noite!', 
    falar() {
        console.log(this.saudacao); 
    }
}

const getPerson = person.falar.bind(person); 
getPerson()