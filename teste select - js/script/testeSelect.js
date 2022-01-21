// dados do forumário 

function verificar_form() {
    // input - name 
    var nome = window.document.getElementById('nome_pessoa').value;
    if (nome == 0) {
        window.alert('digite o seu nome');
    } else {
        // input radio 
        var sexo = window.document.getElementsByName('genero');
        var genero = '';

        if(sexo[0].checked) {
            genero = 'feminino'; 
        } else if (sexo[1].checked) {
            genero = 'masculino'; 
        } else if (sexo[2].checked) {
            genero = 'LGBTQI+'
        } else if (sexo[3].checked) {
            genero = 'Prefiro não dizer'; 
        }
    }

    // input:radio jogadores
    let players = window.document.getElementsByName('players'); 
    let jogador = ''; 
    let img = window.document.createElement('img'); 
    img.setAttribute('id', 'foto'); 

    if (players[0].checked) {
        jogador = 'C. Ronaldo'; 
        img.setAttribute('src', 'imagens/Cristiano-Ronaldo.jpg'); 
    } else if (players[1].checked) {
        jogador = 'L. Messi'; 
        img.setAttribute('src', 'imagens/messi.jpg'); 
    } else if (players[2].checked) {
        jogador = 'Neymar Jr '; 
        img.setAttribute('src', 'imagens/neymar.jpg'); 
    } else if (players[3].checked) {
        jogador = 'Lewandowski'; 
        img.setAttribute('src', 'imagens/lewandowski.jpg'); 
    }


    // resposta 
    let res = window.document.getElementById('resposta'); 

    res.style.textAlign = 'center'
    res.innerHTML = `<strong>NOME:</strong> ${nome} <br> <strong>GENERO:</strong> ${genero} <br> <strong>JOGADOR:</strong> ${jogador} <br><br>`; 
    res.appendChild(img); 
}