// programa de escolhas de pessoas de acordo com a escolha do input. 


function executar_escolhas() {
    var name_pessoa = window.document.getElementById('name_pessoa');
    var pessoa = name_pessoa.value; 
    pessoa.toLowerCase(); 
    var res_image = window.document.getElementById('imagem_pessoa');
     
    res_image.innerHTML = '<img  src="imagens/usuario-vetor.png" alt="imagem_usuário">';
    

    if (pessoa == 'mark zuckerberg') {
        res_image.innerHTML = '<img src="imagens/mark zuckerberg.png" alt="Mark Zuckerberg">'; 
    } 
    else if (pessoa === 'mano brown') {
        res_image.innerHTML = ' <img src="imagens/mano_brown.png" alt="Mano Brown">';
    }
    else if (pessoa === 'cristiano ronaldo') {
        res_image.innerHTML = '<img src="imagens/cristiano_ronaldo.png" alt="Cristiano Ronaldo">';  
    }
    else if (pessoa === 'will smith') {
        res_image.innerHTML = '<img src="imagens/will_smith.png" alt="will Smith">'; 
    }
    else{
        res_image.innerHTML = 'Pessoa não encontrada | <strong>Tente novamente</strong>.'
    }
}