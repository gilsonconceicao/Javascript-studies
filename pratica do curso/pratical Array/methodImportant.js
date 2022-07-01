// Métodos importantes do array

/* >_  
    - pop
    - push
    - shift 
    - unshift 
    - slice 
    - splice
*/

const namesPerson = ['Junior', 'Ronaldo', 'Bernardo', 'Douglas']; 

namesPerson.pop() // remove o ultimo elemento 
console.log(namesPerson); 

namesPerson.push('Ana') // Adiciona no ultimo elemento; 
console.log(namesPerson); 

namesPerson.shift() // Remove o primeiro elemento
console.log(namesPerson)

namesPerson.unshift('Juninho') // adiciona na primeira posição
console.log(namesPerson)

const names2 = namesPerson.slice(0, 3) 
// gera um novo array de acordo com o intervalo
console.log(names2) // não pega o ultimo indice

namesPerson.splice(1, 1, 'Kevin', 'Caique') // adiciona e remove de forma dinâmica
console.log(namesPerson)