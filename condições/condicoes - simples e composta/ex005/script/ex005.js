// limite de velocidade

function Veriificar_velocidade() {
    var vel = window.document.querySelector('#textNaciona');
    vel = textNaciona.value
    var res = window.document.getElementById('res');
    res.innerHTML = `A sua velocidade é ${vel} <strong>km/h</strong>`

    if (vel > 60) {
        res.innerHTML += `<br> Você passou do limite de velocidade, está <strong>multado</strong>`
    }
    res.innerHTML += `<br> Sempre mantenha-se com o sinto de segurança.`
}

// nacionalidade 

function nacionalidade() {
    var nacionalidade = window.document.querySelector('#input_naciona'); 
    var pais = nacionalidade.value; 
    var res_naciona = window.document.getElementById('res_naciona'); 
    res_naciona.innerHTML = `Você vive em ${pais}`; 

    if (pais == 'Brasil') {
        res_naciona.innerHTML += `<br> Você é brasileiro.`
    } else {
        res_naciona.innerHTML += `<br> Você é estrangeiro.`
    }
}