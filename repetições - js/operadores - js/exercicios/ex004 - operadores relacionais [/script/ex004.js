window.alert("Praticando operadores arittméticos com os lógicos")

//nomme
var nome = window.prompt(`Qual é o seu nome? `)
window.alert(`Olá, ${nome}!`)

// operadores lógicos e ternário
var idade = window.prompt(`${nome}, qual a sua idade?`)
window.alert( idade >= 14 && idade <= 18 ? 'Você pode se inscrever' : `Você não pode se inscrever a sua idade é: ${idade}`)

console.log (
    `nome: ${nome} idade: ${idade}`
)