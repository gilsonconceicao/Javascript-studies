// parâmetros e retornos são opcionais

function area(largua, altura) {
    const area = largua * altura; 
    if (area > 20 ) {
        console.log(`O valor acima do permitido ${area} m².`); 
    } else {
        return area
    }
}

console.log(area(2,2)); 
console.log(area(2, undefined)); 
console.log(area()); 
console.log(area(2,3,4,5,6)) // sem necessidade
console.log(area(7,8))