// estados abreviados 

function estados_abreviados() {
    var estado_input = window.document.getElementById('input_estado');
    var estado = estado_input.value; 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = `Você escolheu ${estado}`

    if (estado === 'SP') {
        resposta.innerHTML += '<br> Você é do estado de <strong>São Paulo</strong>'
    }
    if (estado === 'BA') {
        resposta.innerHTML += '<br> Você é do estado da <strong>Bahia</strong>'
    }
    if (estado === 'MG') {
        resposta.innerHTML += '<br> Você é de <strong>Minas Gerais</strong>'
    }
}