// nacionalidade 
function nacionalidade() {

    var pais = window.document.getElementById('naciona_input');
    var resposta = window.document.getElementById('res');
    pais = naciona_input.value;
    resposta.innerHTML = `Você vive no país <strong>${pais}</strong>`

    if (pais === 'Brasil') {
        resposta.innerHTML += ` <br> Você é brasileiro.`
    } else {
        resposta.innerHTML += ` <br> Você é estrangeiro.`
    }
}