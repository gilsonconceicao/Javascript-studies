

var nome = window.prompt('Qual o seu nome? ')
window.alert(`Olá, ${nome}! satisfação em lhe conhecer. `) //pergunta o nome. 

var n1 = Number(window.prompt(`${nome}, digite um número: `))
var n2 = Number(window.prompt(`${nome}, digite mais em um número: `))
var soma = n1 + n2
window.alert(`${nome}, O resultado de ${n1} e ${n2} é: ${soma}`) // Faz a soma de valores. 

window.alert(`${nome}, veja o seu nome em MAIÚSCULA e minuscúlas.`)

document.writeln(`O seu nome em maiúsculo é: ${nome.toUpperCase()}, e o seu nome em minúscula é: ${nome.toLowerCase()}`) // seu nome de duas formas diferentes