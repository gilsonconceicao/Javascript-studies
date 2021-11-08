// velocidade 

function velocidade_input() {
    var vel = window.document.querySelector('#input_vel');
    var resposta = window.document.getElementById('res');
    vel = Number(input_vel.value);
    resposta.innerHTML = `A sua velocidade é ${vel} km/h, o nosso limite é 70 <strong>km/h</strong>`;

    if (vel > 70) {
        resposta.innerHTML += ` <br> Você está <strong>multado</strong>, passou do limite`;
    }

    resposta.innerHTML += ` <br> Dirija sempre com sinto de segurança.`;
}