// é uma função que retorna um objeto! 

// Factory simples

function criarPessoa(nameUser, sobName) {
    return {
        nameUser,
        sobName
    }
}

console.log(criarPessoa('Junior', 'Santos'))