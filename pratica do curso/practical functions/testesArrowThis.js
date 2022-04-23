// arrow + this + anonima 

// arrow
function pessoa() { // pode ser function default ou expression 
    this.msg = 'Mensagem de confirmação'; 
    console.log(this.msg); 
}
pessoa()
// anonima + this
const obj = {
    testeName(getName) {
        console.log('Seu nome é: ', getName); 
    }
}

obj.testeName('Junior');

// function anonima 

const namePerson = function(namepessoa) {
    console.log(namepessoa)
}
namePerson('Junior'); 

