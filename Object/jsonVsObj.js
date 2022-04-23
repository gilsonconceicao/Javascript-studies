// JSON VS OBJETOS

const meuObjeto = {
    a: 1, 
    b: 2, 
    c: 3, 
    soma() {
        return a + b + c
    }
}
// convertendo objeto para JSON
console.log('Convertendo objeto para JSON:', JSON.stringify(meuObjeto))

// convertendo JSON para Objeto 

console.log('Convertendo JSON para objeto', JSON.parse('{"a":1, "b":2, "c":3}')); 