// Curiosidade 

console.log(typeof Array, typeof new Array, typeof []); 

let aprovados = new Array('Junior', 'Cris', 'Mile');  
console.log(aprovados)

aprovados = ['Junior', 'Cris','Mile']; 
console.log(aprovados[0]); 
console.log(aprovados[1]);
console.log(aprovados[2]);

// Adicionando elementos

aprovados.push('Gilson'); 
console.log(aprovados); 

aprovados[8] = 'Pessoa' 
console.log(aprovados.length)

// organizando

console.log(aprovados.sort())
console.log(aprovados)

// excluindo 

delete aprovados[0]; 
console.log(aprovados)


aprovados = ['Junior', 'Cris', 'Mile']
aprovados.splice(0, 1, 'Elemento 1', 'Elemento 2'); 
console.log(aprovados)