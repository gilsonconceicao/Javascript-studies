//factory passando por parametro de forma dinâmica 

function nomesDinamicos(nome, idade, saude='não definida') {
    return {
        nome, 
        idade, 
        saude
        /*
        falarEstadoDeSaude() {
            return `Nome: ${nome + ' você tem ' + idade} anos e a sua saúde é ${saude == true ? 'boa' : 'ruim' }`
        }*/
    }
}
const pessoa01 = nomesDinamicos('Junior', 17, 'boa'); 
console.log(pessoa01); 
/*
const pessoa02 = nomesDinamicos('Daniel', 25, false); 
console.log(pessoa02.falarEstadoDeSaude()); */