// max - min

function sumNumbers(max, min, luckyNumber) {
    const randamNumbers = parseInt(Math.random() * (max - min)) + min; 
    return new Promise((resolve, reject) => {
        if (randamNumbers != luckyNumber) {
            reject(`Número sortado foi: ${randamNumbers}. Diferete de ${luckyNumber}. Lamento!`); 
        } else {
            resolve(`Número sorteado foi ${randamNumbers}. Igual a ${luckyNumber}. Parabéns!`)
        }
    }, 1000)
}


sumNumbers(10, 1, 3) 
    .then((succesNumber => {console.log(succesNumber)}))
    .catch(error => {console.log(error )})