const obj01 = {
    nome: 'Junior', 
    idade: 17, 
    objetivo: 'Aprender sempre mais', 
    saude: 'Ok!'
}
// captura chaves de valores - keys 
console.log(Object.keys(obj01))

// captura valores de objetos
console.log(Object.values(obj01))

// captura chave e valores retornando um array 
const lisObject = Object.entries(obj01); 
lisObject.forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})