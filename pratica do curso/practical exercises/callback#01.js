// CallBack com o metodo ''

const references = ['Stave Jobs', 'Bill Gates', 'Mark Zuckeberg', 'Tim Berners Lee']; 

const getReferences = references.forEach(
    (nameReferences, index) => {
        console.log(`${index}. ${nameReferences}`); 
}); 

console.log('_______names references_________'); 

const getNamesReferences = references.forEach(
    (nameReferences) => {
        console.log(`${nameReferences}`); 
}); 

console.log(getNamesReferences)