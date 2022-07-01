// Percorrendo um array com reduce 

let myArray = [2, 4, 6, 8, 10]; 

// somar todos os valores
const sum = myArray.reduce( (accumulator, current) => {
    return accumulator + current   
})
console.log('Total:',sum)