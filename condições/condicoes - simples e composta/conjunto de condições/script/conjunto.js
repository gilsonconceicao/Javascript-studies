// nome do usuário 

function nome_pessoa() {
var nome = window.document.getElementById('input_nome');
var res_name = window.document.querySelector('#res_nome');
nome = input_nome.value; 
res_name.innerHTML = ` 	&#9660; <br> Olá, ${nome}!`;

}


function idade_pessoa() {
    var idade = window.document.querySelector('#input_idade'); 
    idade = Number(input_idade.value); 
    var res_idade = window.document.getElementById('res_idade'); 
    res_idade.innerHTML = `	&#9660; <br> A sua idade é: ${idade} anos.`

    if (idade >= 18) {
        res_idade.innerHTML += ` <br> <strong>Maior</strong> de idade`; 
    } else {
        res_idade.innerHTML += ` <br> <strong>Menor</strong> de idade. `
    }
}

function velocidade() {
    var vel = window.document.querySelector('#textvel'); 
    var res_vel = window.document.querySelector('#res_detran')
    vel = Number(textvel.value); 
    res_vel.innerHTML = ` &#9660; <br> A sua velocidade é: ${vel} km/h, nosso limite é:<strong> 80 Km/h</strong>`;

    if (vel > 80 ) {
        res_vel.innerHTML += `<br> Você passou o limite de velocidade, está <strong>multado</strong>.`;
    }

    res_vel.innerHTML += `<br> Sempre mantenha-se com o sinto de segurança.`;
}

function nacionalidade() {
    var naciona = window.document.querySelector('#input_naciona'); 
    var pais = naciona.value; 
    var res_naciona = window.document.getElementById('res_naciona'); 
    res_naciona.innerHTML = `&#9660; <br> Você nasceu no pais ${pais}`; 

    if (pais === 'Brasil') {
        res_naciona.innerHTML += `<br> Você é brasileiro. `; 
    } else  {
        res_naciona.innerHTML += `<br> Você é estrangeiro . `;
    }
}