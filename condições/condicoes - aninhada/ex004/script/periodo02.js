// #2 horáio para mostrar - bom dia, boa tarde e boa noite. 

function clicar_horario() {
    var horario_input = window.document.getElementById('input_horario');
    var hora = Number(horario_input.value); 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = `O horário escolhido foi ${hora}.`;

    if (hora <= 12) {
        resposta.innerHTML += `<br> <strong>Bom Dia!</strong>`; 
    }
    else if (hora > 12 && hora < 18 ) {
        resposta.innerHTML += `<br> <strong>Boa tarde!</strong>`; 
    }
    else {
        resposta.innerHTML += `<br> <strong>Boa noite!</strong>`
    }
}