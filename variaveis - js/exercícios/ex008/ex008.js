        // - nome
        var nome = window.prompt(`Qual é o seu nome? `); 
        window.alert(`Muito prazer em lhe conhecer, ${nome}.`); 

        // - idade 
        var anoN = window.prompt(`Qual ano você nasceu ? `); 
        var anoA = 2021; 
        var idade = anoA - anoN; 
        window.alert(`A sua idade é: ${idade} anos.`); 

        // - soma 
        var n1 = Number(window.prompt(`Digite um número, ${nome}.`)); 
        var n2 = Number(window.prompt(`${nome}, digite mais um núnero por favor: `)); 
        var soma = n1 + n2; 
        window.alert(`${nome}, a soma de ${n1} mais ${n2} é igual a: ${soma}.`); 


        window.console.log(`Dados digitados: NOME: ${nome}, IDADE: ${idade} anos, SOMA: ${soma}`)
    