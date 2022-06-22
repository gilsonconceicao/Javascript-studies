// Verificando idade e tratando o erro com try/catch - async/await

function checkedAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve('Maior de idade.');
        } else {
            reject('Menor de idade.');
        }
    })
}

async function checkedingAge(age) {
    try {
        const response = await checkedAge(age)
        const response2 = await response + ' Tudo ok!'
        console.log(response2)
    } catch (error) {
        console.log(error + ' Lamento!')
    }
}

checkedingAge(14)