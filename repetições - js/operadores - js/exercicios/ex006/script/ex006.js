// praticando tudo que eu aprendi de variáveis e operadores

var nome = window.prompt("Olá, qual é o seu nome?")
window.alert(`Muito prazer em lhe conhecer, ${nome}!`)

window.console.log (`Nome: ${nome}`)

// nome
window.alert(`${nome}, vamos somar. `)
var somaN1 = Number(window.prompt(`Digite um número: `))
var somaN2 = Number(window.prompt(`Mais um númeoro para somar com ${somaN1}: `))
var valor_soma = somaN1 + somaN2
window.alert(`O valor de ${somaN1} mais ${somaN2} é igual a: ${valor_soma}`)

window.console.log (
    `O valor de ${somaN1} mais ${somaN2} é igual a: ${valor_soma}.`
)

// multiplicação
window.alert(`${nome}, vamos multiplicar valores: `)
var vezesN1 = Number(window.prompt(`Digite um número para multiplicar: `))
var vezesN2 = Number(window.prompt(`Qual valor deseja  multiplicar o ${vezesN1}?`))
var valor_vezes = vezesN1 * vezesN2
window.alert(`O resultado de ${vezesN1} x ${vezesN2} é igual a: ${valor_vezes}.`)

window.console.log (
    `O resultado de ${vezesN1} x ${vezesN2} é igual a: ${valor_vezes}.`
)

// divisão 
window.alert(`Agora vamos dividir`)
var dividirN1 = Number(window.prompt(`Digite um valor para dividir: `))
var dividirN2 = Number (window.prompt(`Por qual número deseja dividir ${dividirN1} ?`))
var valor_divisao = dividirN1 / dividirN2
window.alert (`O valor da divisão de ${dividirN1} dividido por ${dividirN2} é igual: ${valor_divisao}.`)

window.console.log(
    `O valor da divisão de ${dividirN1} dividido por ${dividirN2} é igual: ${valor_divisao}.`
)

// maior de idade? 
var idade = window.prompt(`Qual a sua idade?`)
window.alert(idade >= 18 ? 'Maior de idade': 'Menor de idade')

window.console.log (
idade >= 18 ? `Maior de idade a sua idade é: ${idade}`: `Menor de idade a sua idade é: ${idade}`
)

window.alert( idade >= 14 && idade <= 18 ? 'Você pode se inscrever' : 'Você não pode se inscrever' )

