const bankData = []; 

function addUsers(name, age) {
    return new Promise((resolve, reject) => {
        const user = {name, age};

        if (name === '' || age <= 0) {
            reject('Lamento! Impossivél cadastrar na ultima tentativa! Verifique!')
        } else {
            bankData.push(user); 
            resolve() 
        }
    })
}

async function consultUsers (name, age) {

    try {
        const response = await addUsers(name, age); 
    } catch (error) {
        console.log(error)
    }

}

consultUsers('Junior', 17)
consultUsers('Mile', 18)
consultUsers('Gilson', 0)


console.log(bankData); 