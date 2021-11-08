// Detran - velocidade 

function calcular_vel() {
    var vel = window.document.querySelector('#textvel'); 
    var res = window.document.getElementById('res'); 
    vel = Number(textvel.value)
    res.innerHTML = ` <strong>Detalhes:</strong> <br> A sua velocidade é: ${vel} Km/h. `; 

    if (vel > 60) {
        res.innerHTML += `<br> Você ultrapassou o limite de velocidade.`;
    }

    res.innerHTML += `<br> Dirija sempre com o sinto de segurança. `
}

// nacionalidades 
function verificar() {
    var nacionalidade = window.document.querySelector("#text_naciona"); 
    var pais = nacionalidade.value;
    var res_naciona = window.document.querySelector("#res_naciona");
    res_naciona.innerHTML = `Nacionalidade: <br> Você vive no país ${pais}.`

    if (pais == 'Brasil') {
        res_naciona.innerHTML += `<br> Você é brasileiro.`
    } else {
        res_naciona.innerHTML += `<br> Você é estrangeiro.`
    }
}