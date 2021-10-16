
//bem vindo 
window.alert('Seja bem vindo(a)')
// nome do usuário 
var nome = window.prompt('Qual é o seu nome? ')
window.alert(`Olá, ${nome}! Vamos somar. `)
// soma 
var n1 = Number(window.prompt(`${nome}, digite um número: `))
var n2 = Number(window.prompt(`Digite mais um número por favor: `))
var soma = n1 + n2 
window.alert(`A soma entre ${n1} mais ${n2} é igual a: ${soma}`)
// idade
var anoN = window.prompt(`${nome}, qual ano você nasceu?`)
var anoA = 2021
var idade = anoA - anoN
window.alert(`A sua idade é: ${idade} anos. `)
// resultado total no console 
window.console.log (
    `O seu nome é ${nome}, a sua soma foi igual a ${soma} e a sua idade é: ${idade} anos.`
)