// testando o switch com estados

function estados_brasil() {
    var estado_input = window.document.getElementById('estado_input'); 
    var estado = estado_input.value; 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = 'Resposta: <br> Você escolheu ' + estado; 
    switch (estado) {
        case 'SP':
            resposta.innerHTML += '<br> <strong>São Paulo</strong> <br> <img src="monitor.png" alt="a">'; 
            break;

        case 'BA': 
            resposta.innerHTML += '<br><strong> Bahia</strong>'; 
            break; 

        case 'AM': 
            resposta.innerHTML += '<br><strong> Amazonas</strong>'; 
            break; 

        case 'MG': 
            resposta.innerHTML += '<br> <strong>Minas Gerais</strong>'; 
            break; 

        case 'RJ': 
            resposta.innerHTML += '<br> <strong>Rio de Janeiro</strong>'; 
            break; 

        default:
            resposta.innerHTML += '<br> <strong>[Erro] estado inválido. </strong>'; 
            break;
    }
}