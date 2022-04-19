// funções CallBack 

const references = ['Mano Brown', 'Edi Rock', 'Ice Blue', 'Kl Jay']; 
const getReferences = references.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`); 
}); 
// get id names
console.log('_________________')
const getNamesReferences = references.forEach(function(nameReferences) {
    console.log(nameReferences); 
}); 


// cars teste app 
console.log('_______________')
const carsProdutores = ['Mercedes Bens', 'BMW', 'Mustang','Jaguar']; 
const getCars = carsProdutores.forEach((nome, indice) => {
    console.log(`${indice + 1}. ${nome}`)
})