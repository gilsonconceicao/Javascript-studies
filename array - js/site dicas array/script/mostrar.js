// mostrar os parágrafos 

// paragrafo o que é - array 

let conteiner_oquee = window.document.getElementById('cont_oque_e'); 

let botao1 = window.document.getElementsByClassName('btn_mostrar')[0]; 

conteiner_oquee.addEventListener('click', function() {
    
    let text_oque_e = window.document.getElementById('text_oque_e')

    if (text_oque_e.style.display === 'none') {
        text_oque_e.style.display = 'block'; 
        botao1.innerHTML = '&#10007;'
    } else {
        text_oque_e.style.display = 'none' 
        botao1.innerHTML = '&#10010;'
    }
});


// paragrafo como utilizar - array 

let botao2 = window.document.getElementsByClassName('btn_mostrar')[1]; 

let conteiner_utili = window.document.getElementById('cont_utilizar'); 

conteiner_utili.addEventListener('click', function() {
    let text_utilizar = window.document.getElementById('text_utilizar'); 

    if (text_utilizar.style.display === 'none') {
        text_utilizar.style.display = 'block'; 
        botao2.innerHTML = '&#10007;'
    } else {
        text_utilizar.style.display = 'none'; 
        botao2.innerHTML = '&#10010;' 
    }
})

// paragrafo regaras - array 

let botao3 = window.document.getElementsByClassName('btn_mostrar')[2]; 

let conteiner_regras = window.document.getElementById('cont_regras'); 

conteiner_regras.addEventListener('click', function() {

    let text_regras = window.document.getElementById('text_regras'); 
    
    if (text_regras.style.display === 'none') {
        text_regras.style.display = 'block';
        botao3.innerHTML = '&#10007;' 
    } else {
        text_regras.style.display = 'none'; 
        botao3.innerHTML = '&#10010;' 
    }
})

