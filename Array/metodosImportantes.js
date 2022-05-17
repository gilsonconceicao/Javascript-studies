// Metodos importantes

const games = ['Uncharted 4', 'The Last Of Us', 'God Of War', 'Just Cause 4']; 

const getGames = games.forEach( (nameOfGame, indice) => {
    console.log(`${indice}: ${nameOfGame}`)
});

console.log('>_');

console.log(games); 

games.pop() // remove o elemento 
console.log(games)

games.push('Fifa') // adiciona na ultima indice  
console.log(games); 

games.shift() // revmove o primeiro elemento 
console.log(games); 

games.unshift('PES') // adicona na premeira indice
console.log(games); 

let newArray = games.slice(0, 3) // gera um novo array de acordo com o intervalo 
console.log(newArray); 

games.splice(1, 0, 'AddGame') // adiciona e remove um elemento de forma dinâmica
console.log(games)