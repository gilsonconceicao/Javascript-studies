Array.prototype.reduce2 = function (callback) {
    let acumulador = this[0]; 
    for (let i = 1; i < this.length ; i++) {
        acumulador = callback(acumulador, this[1])
    }
    return acumulador
}

let soma = (total, atual) => total + atual
const nums = [1,2,3,4,5,6,7]; 

console.log(nums.reduce2(soma)); 