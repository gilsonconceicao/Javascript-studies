// nome 

var nome = window.prompt('Qual é o seu nome? ')
window.alert(`Olá, ${nome}!`)

console.log (
    `Nome: ${nome}`
)

// idade e limite 
var idade = window.prompt(`${nome}, qual a sua idade? `)
window.alert( idade >= 14 && idade <= 18 ? 'Você pode se inscrever' : 'Você não pode se inscrever. anos')

//maior de idade? 
window.alert(idade >= 18 ? `Você é maior de idade, sua idade é: ${idade}` : `Você é menor de idade, sua idade é: ${idade} anos.`)

window.console.log (
    `Idade: ${idade} anos`
)
window.console.log (
    idade >= 14 && idade <= 18 ? 'Você pode se inscrever' : 'Você não pode se inscrever'
)
window.console.log (
    idade >= 18 ? `Você é maior de idade, sua idade é: ${idade} anos.` : `Você é menor de idade, sua idade é: ${idade} anos.`
)

//- contas
window.alert(`Vamos somar!`)
var maisN1 = Number(window.prompt(`Digite um número para somar: `))
var maisN2 = Number(window.prompt(`Qual valor irá somar com ${maisN1}? `))
var valor_soma = maisN1 + maisN2
window.alert(`${nome}, o valor de ${maisN1} + ${maisN2} é igual a: ${valor_soma}.`)

window.console.log (
    ` o valor de ${maisN1} + ${maisN2} é igual a: ${valor_soma}.`
)

//- multiplicar 
window.alert(`Vamos multiplicar!`)
var vezesN1 = Number(window.prompt(`Qual valor deseja multiplicar? `))
var vezesN2 = Number(window.prompt(`Por quantas vezes irá multiplicar o valor ${vezesN1}? `))
var valor_vezes = vezesN1 * vezesN2
window.alert(`A multiplicação de ${vezesN1} x ${vezesN2} é igual: ${valor_vezes}.`)

window.console.log (
    `A multiplicação de ${vezesN1} x ${vezesN2} é igual: ${valor_vezes}.`
)

//- dividir 
window.alert(`${nome}, vamos dividir`)
var dividirN1 = Number(window.prompt(`Digite um valor que deseja dividir: `))
var dividirN2 = Number(window.prompt(`Por quantas vezes deseja dividir o valor ${dividirN1}? `))
var valor_divisao = dividirN1 / dividirN2
window.alert(`A divisã de ${dividirN1} / ${dividirN2} é igual a: ${valor_divisao}. `)

window.console.log (
    `A divisã de ${dividirN1} / ${dividirN2} é igual a: ${valor_divisao}. `
)

