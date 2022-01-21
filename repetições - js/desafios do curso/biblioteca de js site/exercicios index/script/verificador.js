// vrificador de idade com imagens e gênero 

function verificar_idade() {
    // idade 
    let dados_idade = [new Date().getFullYear(), document.getElementById('idade_input').value];
    let idade = dados_idade[0]- dados_idade[1]; 

    //resposta 
    let res = window.document.getElementById('res'); 

    if(dados_idade[1] == 0 ) {
        window.alert('[ERRO] ---> ano de nascimento não digitado.'); 
    } else if (dados_idade[1] >= 2021) {
        window.alert('[ERRO] ---> idade inválida.'); 
    } else {
        // input radio 
        var sex = window.document.getElementsByName('genero'); 
        var genero = ''; 
        //create element 
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (sex[0].checked) {
            genero = 'homem'; 

            if(idade >= 0 && idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens_exercicios/bebe_homem.png')
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src', 'imagens_exercicios/homem_novo.png')
            } else if (idade <= 60) {
                // adulto
                img.setAttribute('src', 'imagens_exercicios/homem_media.png') 
            } else {
                // idoso
                img.setAttribute('src', 'imagens_exercicios/homem_idoso.png')
            }

        } else if (sex[1].checked) {
            genero = 'mulher'; 

            if(idade >= 0 && idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens_exercicios/bebe_mulher.png')
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src', 'imagens_exercicios/mulher_nova.png')
            } else if (idade <= 60) {
                // adulto
                img.setAttribute('src', 'imagens_exercicios/mulher_media.png') 
            } else {
                // idoso
                img.setAttribute('src', 'imagens_exercicios/mulher_idosa.png')
            }
        } 
    } 

    res.innerHTML = ` você é ${genero} de ${idade} anos. <br><br>`; 
    res.appendChild(img)
} 