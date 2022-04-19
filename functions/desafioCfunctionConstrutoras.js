// fazer uma classe virar uma 

function pessoa (nome) {
    this.nome = nome; 
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`); 
    }
}

const p1 = new pessoa('Junior Santos'); 
p1.falar()