// destructuring veio no ECMA 2015 
// tem como objetivo de facilitrar o acesso de objetos e array 

const userDice = {
    nomeUser: 'Junior', 
    emailUser: 'gilson@gmail.com',
    endereco: {
        rua: 'Rua Luiz Augusto Pashoal', 
        cep: '04328-050'
    }
}

const {nomeUser: nome, emailUser: email, endereco: {rua, cep: CEP}} = userDice;

console.log('Nome: ', nome); 
console.log('Email: ', email); 
console.log('Endereço: ', rua, CEP); 
