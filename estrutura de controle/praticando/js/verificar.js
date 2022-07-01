// verificar dados e percorrer object 

const btnEnviarDados = document.getElementById('btnEnviarDados').addEventListener('click', function(e) {
    e.preventDefault(); 

    let usuario = {
        nome: document.getElementById('nameText').value, 
        idade: document.getElementById('yersNumber').value
    }

    let localRes = document.getElementById('resInputs'); 

    for(let atributo in usuario) {
        localRes.innerHTML += `
        ${atributo}: ${usuario[atributo]} </br>` 
    }
})