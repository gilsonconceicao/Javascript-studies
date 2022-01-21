// verificar idade com gênero e imagens 

function verificar_idade() {
    // idade 
    let ano = new Date().getFullYear(); 
    let ano_dgito = window.document.getElementById('ano_nasc').value; 
    let idade = ano - ano_dgito; 
    //resposta 
    let res = window.document.getElementById('res_verificar')
    if (ano_dgito == 0 ){
        window.alert('[ERRO] --> Digite o ano de nascimento.')
    } else if ( ano_dgito >= 2021) {
        window.alert('[ERRO] --> Idade inválida! Digite novamente.')
    } else {
        // gênero 
        let sex = window.document.getElementsByName('genero'); 
        var genero = ''; 
        // create elemente image 
        var img = window.document.createElement('img'); 
        img.setAttribute('id', 'fotos'); 

        if (sex[0].checked) {
            genero = 'homem'; 

            if (idade >= 0 && idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens/bebe_homem.png'); 
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src', 'imagens/homem_novo.png'); 
            } else if (idade <= 60) {
               // adulto  
               img.setAttribute('src', 'imagens/homem_media.png'); 
            } else {
                // idoso
                img.setAttribute('src', 'imagens/homem_idoso.png'); 
            }

        } else if (sex[1].checked) {
            genero = 'mulher'; 

            if (idade >= 0 && idade <= 12) {
                // criança
                img.setAttribute('src', 'imagens/bebe_mulher.png'); 
            } else if (idade <= 25) {
                // jovem
                img.setAttribute('src', 'imagens/mulher_nova.png'); 
            } else if (idade <= 60) {
               // adulto  
               img.setAttribute('src', 'imagens/mulher_media.png'); 
            } else {
                // idoso
                img.setAttribute('src', 'imagens/mulher_idosa.png'); 
            }
        }
    }
    res.style.textAlign = 'center'; 
    res.innerHTML = ` você é ${genero} de ${idade} anos. <br><br>`; 
    res.appendChild(img)
}