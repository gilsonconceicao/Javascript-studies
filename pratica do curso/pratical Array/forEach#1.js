// Percorrendo elemento de array 

const nomes = ['Gilson', 'Junior', 'Deives']; 

nomes.forEach( (nome, indice) => {
    console.log(`${indice+1}. ${nome.toUpperCase()}`)
})