// falar saudação 

const pessoa = {
    saudacao: 'BOM DIA!', 
    falar() {
        console.log(this.saudacao); 
    }
}

const falarSaudacao = pessoa.falar.bind(pessoa); 
falarSaudacao(); 

// contador 

function contador() {
    this.currentNumber = 0; 

    setInterval(function() {
        this.currentNumber++; 
        console.log(this.currentNumber); 
    }.bind(this), 1000); 
} new contador; 



