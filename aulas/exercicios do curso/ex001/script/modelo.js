function mudar_tema() {
    var img = window.document.getElementById('imagem'); 
    var msg = window.document.getElementById('mensagem'); 
    var data = new Date(); 
    var hora = data.getHours(); 
    msg.innerHTML = `Agora são ${hora} horas. `; 

    if (hora >= 0 && hora <= 12 ) {
        // bom dia
        img.src = 'imagens/horario_manha.png';
        window.document.body.style.background = '#f5b318'
    }
    else if (hora >= 13 && hora <= 18) {
        // boa tarde
        img.src = 'imagens/horario_tarde.png'; 
        window.document.body.style.background = '#ed3f28'
    }
    else {
        // boa noite
        img.src = 'imagens/horario_noite.png'; 
        window.document.body.style.background = '#2a2a2a'
    }
}