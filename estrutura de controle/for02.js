const notas = [6.7, 7.4, 9.8, 8.1, 7.7]; 

for(let i in notas) {
    console.log(`i=${i} ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana', 
    sobrenome: 'Santos',
    idade: 10, 
    peso: 27 
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`); 
}