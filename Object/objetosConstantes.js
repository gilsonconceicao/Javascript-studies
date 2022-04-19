// pessoa -> {...}
const pessoa = {nome: 'Junior'}
pessoa.nome = 'Santos'; 
console.log(pessoa);

// pessoa -> 456 -> {...}

Object.freeze(pessoa);
// nada após disso será alterado. Está congelado