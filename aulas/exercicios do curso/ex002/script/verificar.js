

function verificar() {
    var data = new Date(); 
    var ano = data.getFullYear(); // ano atual 

    var digito = window.document.getElementById('input_idade'); 
    var idade = digito.value; // idade

    var ano_nasc = ano - idade; // ano de nascimento

    var res = window.document.getElementById('res'); // resposta

    if (ano_nasc == 0 || ano_nasc == 2021) {
        window.alert('[erro] preencha os dados corretamente.')
        //caso de erro
    } else {
        var sexo = window.document.getElementsByName('text_sexo'); // input:radio
        var genero = ''; // acesso ao gênero.

        var img = window.document.createElement('img'); // create image
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) { // para os homens
            genero = 'Homem'; 

            if (ano_nasc >= 13 && ano_nasc <= 25) {
                // jovem
                img.setAttribute('src', 'imagens/homem_novo.png');
            }
            else if (ano_nasc <= 60) {
                // adulto
                img.setAttribute('src', 'imagens/homem_media.png'); 
            }
            else {
                // idoso
                img.setAttribute('src', 'imagens/homem_idoso.png'); 
            }
        } 
        else if (sexo[1].checked) { // para as mulheres
            genero = 'Mulher'; 

            if (ano_nasc >= 13 && ano_nasc <= 25) {
                // jovem
                img.setAttribute('src', 'imagens/mulher_nova.png'); 
            }
            else if (ano_nasc <= 60) {
                // adulta
                img.setAttribute('src', 'imagens/mulher_media.png'); 
            }
            else {
                // idosa
                img.setAttribute('src', 'imagens/mulher_idosa.png'); 
            }
        }
    }


    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos: ${genero} de ${ano_nasc} anos!` ; 
    res.appendChild(img)
     
}