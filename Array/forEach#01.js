// Percorrendo array

const personNames = ['Junior', 'Bruno', 'Ana', 'Daniel']; 

personNames.forEach((nome, indice) => {
    console.log(`${indice+1}. ${nome.toUpperCase()}`)
})