 // - nome
 var nome = window.prompt('Digite o seu nome: ')
 window.alert(` Olá, ${nome}! Vamos somar.`)

 // - somar 
 var n1 = Number(window.prompt(`${nome}, me diga um número`))
 var n2 = Number(window.prompt(`Digite mais um número por favor, ${nome}`))
 var soma = n1 + n2
 window.alert(`${nome}, a soma entre ${n1} mais ${n2} é igual a: ${soma}`)

 // - idade 
 var anoN = window.prompt(`${nome}, qual ano você nasceu? `)
 var anoA = 2021
 var idade = anoA - anoN
 window.alert(`A sua idade é: ${idade}`)

 //fatos do nome 
 window.alert(
     `${nome}, seu nome tem ${nome.length} letras, em maiúsculo é ${nome.toUpperCase()}, e, em menúsculo é ${nome.toLowerCase()}`
     )