// sistema de limite de idade para votar// 

function cliacar_idade() {
    var input_idade = window.document.getElementById('input_idade'); 
    var idade = input_idade.value; 
    var resposta = window.document.getElementById('res'); 

    resposta.innerHTML =  `A sua idade é ${idade} anos. `; 

    if (idade < 16) {
        resposta.innerHTML += ' <br> Você não pode <strong>votar</strong>. '
    }
    else if (idade <= 18 || idade > 65) {
        resposta.innerHTML += ' <br> O seu voto é <strong>opcional</strong>. '
    }
    else {
        resposta.innerHTML += ' <br> O seu voto é <strong>obrigatório</strong>. '
    }

}