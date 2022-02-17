// verificando nacionalidades

function verificar_pais() {
    var naciona = window.document.querySelector("#text_naciona");
    var pais = naciona.value; 
    var resposta = window.document.getElementById('res');
    resposta.innerHTML = `Você vive em ${pais}`;

    if (pais == 'Brasil') {
        resposta.innerHTML += ` <br> Você é brasileiro`; 
    } else {
        resposta.innerHTML += ` <br> Você é estrangeiro`; 
    }
}