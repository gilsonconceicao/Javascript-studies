// destructring  #3 praticando o conceito 

const pessoa = {
    nome: 'Junior', 
    idade: 17, 
    endereço: {
        rua: 'programador...', 
        cep: '04328050'
    }
}

const {nome: namePerson, idade: yers, endereço: {rua: quebrada, cep: CEP}} = pessoa; 

console.log('Nome:', namePerson); 
console.log('Idade:', yers);
console.log('Endereço:', quebrada, CEP) 