// herança com function constructor 

(function() {
    function CreatePerson (first, last, ageNasc, eyecolor) {
        this.first = first; 
        this.last = last; 
        this.ageNasc = ageNasc; 
        this.eyecolor = eyecolor; 
    }
    
    CreatePerson.prototype.namePerson = function () {
        console.log(`Olá, ${this.first} ${this.last}!`)
    }

    CreatePerson.prototype.yersPerson = function() {
        console.log(`Idade é ${new Date().getFullYear() - this.ageNasc} anos.`)
        console.log(`Cor dos olhos ${this.eyecolor}.`)
        
    }
    
    const person1 = new CreatePerson("Junior","Santos","2005", "castanho")
    person1.namePerson(); 
    person1.yersPerson(); 

    console.log('_ _ _ _ _ _ _ _ _ _ _')

    const person2 = new CreatePerson

    person2.first = 'Filipe'; 
    person2.last = 'Souza'; 
    person2.ageNasc = 1998; 
    person2.eyecolor = 'preto'
    person2.namePerson()
    person2.yersPerson()

    console.log('_ _ _ _ _ _ _ _ _ _ _')

    const person3 = new CreatePerson("Ana","Guanabara","1970", "verde")
    person3.namePerson(); 
    person3.__proto__ = person2.yersPerson();     
})()