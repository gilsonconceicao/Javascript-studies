window.alert ('Seja bem vindo(a)')

// nome 
var nome = window.prompt("Digite o seu nome: ")
window.alert(`Olá, ${nome}!`)

// limite de idade 
var ano_nasc = window.prompt(`${nome}, infirme o ano de nascimento para ver se pode realizar o cadastro: `)
var ano_atual = 2021
var idade = ano_atual - ano_nasc
window.alert ( idade >= 14 && idade <= 18 ? `Você pode! A sua idade é ${idade} anos. ` : `Você não pode. A sua idade é ${idade} anos.`)