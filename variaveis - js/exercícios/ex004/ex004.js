var nome = window.prompt(`Qual é o seu nome ? `) // qual o seu nome 
window.alert(`Muito prazer, ${nome}! Vamos somar um pouco :)`)

var n1 = Number(window.prompt(`Digite um número: `)) // conta de mais 
var n2 = Number(window.prompt(`digite mais um número por favor: `))
var soma = n1 + n2
window.alert(`A soma de ${n1} mais ${n2}: ${soma}`)

var anoN = window.prompt(`Qual ano você nasceu? `) // qual a sua idade
var anoA = 2021
var idade = anoA - anoN
window.alert(`A sua idade é: ${idade}`)

//características do nome digitado 
window.alert(`Características do seu nome tem ${nome.length} letras, em maiúsculo ${nome.toUpperCase()}, em minúsculo ${nome.toLowerCase()}`)