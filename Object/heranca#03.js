//herança com o método Obejct.create 

const pai = {
    nome: 'Pedro', 
    corDoCabelo: 'preto'
}

const filha = Object.create(pai); 
filha.nome = 'Julia'; 
//console.log(filha.corDoCabelo)

const filha02 = Object.create(pai, {
    nome: {value: 'Larissa', writable: false, enumerable: true}
})
console.log(filha02.nome);
filha02.nome = 'Mile'
console.log(`${filha02.nome} tem o cabelo de cor ${filha02.corDoCabelo}`)

console.log (Object.keys(filha)); 
console.log(Object.keys(filha02)); 

// percorrendo com for in

for ( let key in filha02 ) {
    filha02.hasOwnProperty(key) ? 
        console.log(key) : console.log(`Por herança: ${key}`)
}