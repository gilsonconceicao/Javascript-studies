const a = 1
const b = 2
const c = 3

const obj01 = { a:a, b:b, c:c} // permite alterar o nome do objeto 
const obj02 = { a, b, c} // vai de forma direta
console.log(obj01, obj02); 

const nomeAttr = 'Nota'; 
const valorAttr = 8.0; 

const obj03 = {}
obj03[nomeAttr] = valorAttr; 

console.log(obj03) 