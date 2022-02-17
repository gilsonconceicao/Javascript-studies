// limite de idade que pode votar. 

function idade_limite() {
    var idade_input = window.document.getElementById('idade_input'); 
    var idade = idade_input.value; 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = 'A sua idade é ' + idade; 

    if (idade < 16 ) {
        resposta.innerHTML += '<br> Você não pode votar'; 
    }
    else if (idade < 18 || idade > 65) {
        resposta.innerHTML += '<br> O seu voto é opcional'; 
    }
    else {
        resposta.innerHTML += '<br> Voto obrigatório'; 
    }
}