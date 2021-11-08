// #2 no navegador limite de idade para votar. 

function clicar_votos() {
    var idade_input = window.document.getElementById('idade_input'); 
    var idade = Number(idade_input.value); 
    var resposta = window.document.getElementById('res'); 
    resposta.innerHTML = `A sua idade é: ${idade} anos.`; 

    if (idade < 16) {
        resposta.innerHTML += `<br> Você não pode votar. `; 
    }  
    else if (idade <= 18 || idade > 65) {
        resposta.innerHTML += `<br> O seu voto é opcional`; 
    }
    else {
        resposta.innerHTML += `<br> O seu voto é obrigatório`; 
    }
}