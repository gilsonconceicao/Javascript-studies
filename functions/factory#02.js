//factory passando por parametro de forma dinâmica 

function addPerson (first, last, age) {
    return {
        first, 
        last, 
        age 
    },
    console.log(first, last, age)    
}

const person1 = addPerson('Junior', 'Santos', 18)
// Retorno é imediato. 

