window.alert('Irei fazer algumas perguntas. '); 

        // - nome
        var nome = window.prompt('Qual é o seu nome? '); 
        window.alert(`Olá, ${nome}! Vamos somar`); 

        // - soma
        var n1 = Number(window.prompt(`${nome}, diga-me um número: `))
        var n2 = Number(window.prompt(`${nome}, digite mais um número? `))
        var soma = n1 + n2 
        window.alert(`${nome}, o resultado de ${n1} e ${n2} é igual a: ${soma}`)

        // - idade
        var anoN = window.prompt(`Qual ano você nasceu? `)
        var anoA = 2021
        var idade = anoA - anoN 
        window.alert(`A sua idade é: ${idade} anos.`)

        // dados do nome 
        window.alert(`Seu nome tem ${nome.length} letras, em maiúsculo é: ${nome.toUpperCase()}, em menúsculo: ${nome.toLowerCase()}`)

        // resultado no console - confirmação se está ok
        window.console.log(
            `Dados digitados: NOME: ${nome}, IDADE: ${idade}, SOMA: ${soma}`
        )