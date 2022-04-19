// true ou false; 

let isAtivo = false; 
console.log(isAtivo); 

isAtivo = true; 
console.log(isAtivo); 

isAtivo = 1;
console.log(!!isAtivo); 

console.log('Apenas resultado verdadeiros'); 
console.log(!!3); 
console.log(!!-1); 
console.log(!! ' '); //com espaço
console.log(!![]); 
console.log(!!Infinity);
console.log(!!(isAtivo = true)); 

console.log('Apenas resultados falsos'); 
console.log(!!0); 
console.log(!!''); // sem espaço
console.log(!!null);
console.log(!!NaN); 
console.log(!!undefined); 
console.log(!!(isAtivo = false)); 

// para finalizar...
console.log(!!('' || null || NaN || 0 ));

let nome = ''; 
console.log(nome || 'Desconhecido');