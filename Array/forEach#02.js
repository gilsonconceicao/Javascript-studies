// Implementação forEach 
/*
const namesPerson = ['Junior', 'Mile', 'Bruno', 'Daniel', 'Ana']; 

// passando letras maúsculas e adicionando caractere no final

namesPerson.forEach( (nomes, index) => {
    console.log(`${index+1} ${nomes.toUpperCase()}`)
})
*/

Array.prototype.forEach2 = function (callback) {
    for ( let i = 0 ; i < this.length ; i++ ) {
        callback(this[i], i, this)
    }
}

const personNames = ['Junior', 'Bruno', 'Ana', 'Daniel']; 

personNames.forEach2( (names, index) =>  {
    console.log(`${index+1}. ${names}`);
})
