window.alert(`Irei fazer algumas perguntas. `)
        
//nome
var nome = window.prompt(`Qual o seu nome? `)
window.alert(`Muito prazer em lhe conhecer, ${nome}!`)

//soma
var n1 = Number(window.prompt(`Vamos somar, digite um número: ` ))
var n2 = Number(window.prompt(`Digite mais um número por favor: `))
var soma = n1 + n2 
window.alert(`A soma entre ${n1} mais ${n2} é igual a ${soma}`)

//idade 
var anoN = window.prompt(`${nome}, qual ano você nasceu? `)
var anoA = 2021
var idade = anoA - anoN
window.alert(`A sua idade é: ${idade}`)

// resumo do que digitou 
window.alert(`resumo sobre você: o seu nome é ${nome}, a sua idade é ${idade}, a soma entre os valores digitados foi: ${soma}`)