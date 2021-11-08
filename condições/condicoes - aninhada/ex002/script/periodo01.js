// periodo através de horários

function clicar_previsao() {
    var number_input = window.document.getElementById('namber_hora'); 
    var hora = Number(number_input.value); 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML  = `O horário escolhido por você foi: ${hora}`; 

    if (hora <= 12 ) {
        resposta.innerHTML += ' <br> Bom dia!'; 
    } 
    else if (hora > 12 && hora < 18 ) {
        resposta.innerHTML += ' <br> Boa tarde!'; 
    }
    else {
        resposta.innerHTML += ' <br> Boa noite.'; 
    }
}