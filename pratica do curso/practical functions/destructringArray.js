// destructring por array

const createUser = {
    nomeUser: 'Junior', 
    idade: 17, 
    endereco: {
        local: 'Rua Luiz Augusta...', 
        cep: '04328-050'
    }
}

const {nomeUser: nome, idade: yers, endereco: {local: rua, cep: CEP} } = createUser

console.log('Nome:', nome); 
console.log('Idade:', yers); 
console.log('Endereço:', rua + 'CEP: ' + CEP)