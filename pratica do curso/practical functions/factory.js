// é um metodo que retorna um objeto podendo deixar dinâmico em operações repetitivas. 

// maneira #01 

function createPerson(firstName, lastName) {
    return {
        firstName, 
        lastName
    }
}
console.log(createPerson('Junior', 'Santos'))