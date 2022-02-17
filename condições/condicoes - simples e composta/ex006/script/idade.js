// idade limite e soma 

function somar_idade() {
    var idade = window.document.getElementById('input_idade'); 
    var res = window.document.getElementById('res');
    idade = Number(input_idade.value); 
    var anoA = 2021; 
    var soma_idade = anoA - idade; 
    res.innerHTML = `A sua idade é ${soma_idade} anos. `

    if (soma_idade >= 18) {
        res.innerHTML += ` <br> <strong>Maior</strong> de idade.`
    } else {
        res.innerHTML += ` <br> <strong>Menor</strong> de idade.`
    }
}

// Exercício elaborado por subtrair o ano de 2021 por o ano de nascimento. 