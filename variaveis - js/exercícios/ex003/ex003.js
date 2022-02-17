var nome = window.prompt(`Qual o seu nome? `) // nome
window.alert(`Olá, ${nome}! Feliz por lhe conhecer.`)

var anoN = window.prompt(`Qual ano você nasceu? `) ///qual ano nasceu 
var anoA = 2021
var idade = anoA - anoN
window.alert(`A sua idade é, ${idade}`)

window.alert(`vamos somar!!`) // Soma de dois números 
var n1 = Number(window.prompt(`${nome}, digite um número: `))
var n2 = Number(window.prompt(`${nome}, por favor, digite mais um número `))
var soma = n1 + n2
window.alert(`O valor da soma de ${n1} + ${n2} é ${soma}`)


window.alert(`Veja o seu nome com letras maiúsculas e minúsculas e quantas palavra. `)
document.write(`Seu nome tem ${nome.length} letras, seu nome em maiúsculo é: ${nome.toUpperCase()}, seu nome minúsculo é: ${nome.toLowerCase()}`)