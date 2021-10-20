// nome
window.alert("Seja bem vindo(a).")
var nome = window.prompt("Qual é o seu nome? ")
window.alert(`Olá, ${nome}! Vamos realizar alguns operadores.`)


window.console.log (
    `O seu nome é ${nome}.`
)
// soma
window.alert(`${nome}, primeiro vamos somar!`)
var soma_N1 = Number (window.prompt(`Digite um número: `))
var soma_N2 = Number (window.prompt(`${nome}, digite mais um número para somar com ${soma_N1}: `))
var soma_resultado = soma_N1 + soma_N2 
window.alert (`${nome} a soma de ${soma_N1} + ${soma_N2} é igual a: ${soma_resultado}`)


window.console.log (
    `A sua soma foi: ${soma_resultado}`
)

// subtração
window.alert(`${nome}, agora vamos subtrair!`)
var menos_N1 = Number (window.prompt(`Digite um número: `))
var menos_N2 = Number (window.prompt(`${nome}, digite mais um número para subtrair o ${menos_N1}: `))
var menos_resultado = menos_N1 - menos_N2 
window.alert (`${nome} a soma de ${menos_N1} + ${menos_N2} é igual a: ${menos_resultado}`)

window.console.log (
    `Ao subtrair restou-se: ${menos_N1}`
)

// multiplicação 
window.alert(`${nome}, agora vamos multiplicar!`)
var vezes_N1 = Number (window.prompt(`Digite um número: `))
var vezes_N2 = Number (window.prompt(`${nome}, digite mais um número para multiplicar o ${vezes_N1}: `))
var vezes_resultado = vezes_N1 * vezes_N2 
window.alert (`${nome} a soma de ${vezes_N1} + ${vezes_N2} é igual a: ${vezes_resultado}`)

window.console.log (
    `O resultado da multiplicação foi igual a: ${vezes_resultado}`
)