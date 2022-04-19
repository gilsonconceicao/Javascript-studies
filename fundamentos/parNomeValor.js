// par nome e valor 

const saudacao = 'Opa!' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa!' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor 

const cliete = {
    nome: 'Junior', 
    idade: 17, 
    peso: 69, 
    endereco: {
        jardimLourdes: 'Rua Luiz Augusto', 
        numero: 915 
    }
}

console.log(saudacao); 
console.log(exec()); 
console.log(cliete)