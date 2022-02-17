// nome
var nome = window.prompt(`Qual o seu nome? `)
window.alert(`Olá, ${nome}! Vamos fazer algumas pergunta. `)

// idade
var anoN = window.prompt(`Qual ano você nasceu? `)
var anoA = 2021; 
var idade = anoA - anoN; 
window.alert(`A sua idade é: ${idade}`)

// soma 
var n1 = Number(window.prompt(`${nome}, digite um número: `))
var n2 = Number(window.prompt(`${nome}, digite mais um número por favor: `))
var soma = n1 + n2 
window.alert (`${nome}, a soma de ${n1} mais ${n2} é igual: ${soma}`)

//tudo digitado
window.alert (`O QUE VOCÊ DIGITOU: seu nome é ${nome}, a sua idade é ${idade} anos, a soma que você fez deu ${soma}`)

// fatos
window.alert(`${nome}, seu nome tem ${nome.length} letras, em maiúsculo é ${nome.toUpperCase()}, e, em menúsculo ${nome.toLowerCase()}`)
