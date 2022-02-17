// detran limite de velocidade 

function verificar() {
    var vel = window.document.querySelector('#textVel');
    var res = window.document.querySelector('#res');
    vel = Number(textVel.value);
    res.innerHTML = `A sua velocidade é: ${vel} Km/h`; 

    res.innerHTML += ` <br> Sempre use o sinto de segurança! `; 

    if (vel > 80) {
        res.innerHTML += `<br> Você passou do limite da velocidade. Você está <strong>MULTADO</strong>. `
    }
}   