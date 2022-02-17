// pratica 01 no navegador de dias da semana de acordo com o número digitado. 

function clicar_semana() {
    var semana  = window.document.getElementById('input_semana'); 
    var diaSem = Number(semana.value); 
    var agora = new Date(); 
    var hoje = agora.getDay(); 

    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = `O número escolhido foi: ${diaSem}`; 

    switch (diaSem) {
        case 0:
            resposta.innerHTML += `<br> Domingo`; 
            break;
        case 1: 
            resposta.innerHTML += `<br> Segunda`; 
            break; 
        case 2: 
            resposta.innerHTML += `<br> Terça`; 
            break; 
        case 3: 
            resposta.innerHTML += `<br> Quarta`; 
            break; 
        case 4: 
            resposta.innerHTML += `<br> Quinta`; 
            break; 
        case 5: 
            resposta.innerHTML += `<br> Sexta`; 
            break; 
        case 6:
            resposta.innerHTML += `<br> Sábado`; 
            break; 
        case 7: 
            resposta.innerHTML += `<br> ${hoje}`; 
            break; 
        default:
            resposta.innerHTML += `<br> <strong>[ERRO]</strong> Dia da semana inválido.`
            break;
    }
}