// arrow function manipulando o this. 

const nomePessoa = {
    nome: 'Junior Santos', 
    falar() {
        console.log(this.nome)
    }
}

let dizerPessoa = nomePessoa.falar.bind(nomePessoa); 
dizerPessoa();


// função anonima

function soma(n1) {
    return function(n2) { // anônima 
        return n2 + n1
    }
}

console.log(soma(2)(5)); 

const passarNome = function(namePessoa) {
    console.log(namePessoa); 
}
passarNome('Junior Santos')