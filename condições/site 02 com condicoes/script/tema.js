// mudar tema pelo o horário; 

function clicar_hora(){

    // DOM - componentes
    var corpo = window.document.getElementById('corpo')    
    var conteiner = window.document.getElementById('principal')
    //input e respostas
    var input_number = window.document.getElementById('input_number'); 
    var hora = input_number.value; 
    var res = window.document.getElementById('img_page'); 
    var res_paragrafo = window.document.getElementById('res_horario'); 


    if (hora >= 5 && hora <= 12) {
        res.innerHTML = '<img src="imagens/horario_manha.png" alt="horario_manha">';
        corpo.style.background = '#0074CC'; 
        conteiner.style.background = '#0091FF'
        res_paragrafo.innerHTML = `São ${hora} horas da manhã, Bom Dia!`;
    }
    else if (hora > 12 && hora <= 17) {
        res.innerHTML = '<img src="imagens/horario_tarde.png" alt="horario_tarde">';
        corpo.style.background = '#FF6D1F'; 
        conteiner.style.background = 'white'; 
        res_paragrafo.innerHTML = `São ${hora} horas da tarde, Boa Tarde!`;
    }
    else if (hora >= 18) {
        res.innerHTML = '<img src="imagens/horario_noite.png" alt="horario_noite">';
        corpo.style.background = '#08278c'; 
        conteiner.style.background = '#2488B2';
        res_paragrafo.innerHTML = `São ${hora} horas da noite, Boa Noite!`;
    }
    else if ( hora >= 0 && hora <= 4) {
        res.innerHTML = '<img src="imagens/horario_noite.png" alt="horario_noite">'; 
        corpo.style.background = '#2a2a2a'; 
        conteiner.style.background = '#2488B2';
        res_paragrafo.innerHTML = `São ${hora} horas da madrugada, Boa Madrugada!`
    }
}