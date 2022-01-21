// tema da pagina de acordo com o horário 

function tama_page() {
    // horário 
    let hora = new Date().getHours(); 
    // conteiners
    let body_page = window.document.body; 
    body_page.style.transition = 'all .8s'; 
    //resposta 
    let res = window.document.getElementsByClassName('res_tema')[0];
    res.style.display = 'block'; 

    if (hora >= 0 && hora <= 12) {
        // bom dia
        body_page.style.background = '#23C9EB';
        res.innerHTML = 'Bom dia!'; 
    } else if (hora <= 17) {
        // boa tarde
        body_page.style.background = '#FF6931';
        res.innerHTML += 'Boa tarde!'; 
    } else if (hora <= 23 ) {
        // boa noite
        body_page.style.background = '#333333';
        res.innerHTML = 'Boa noite!';
    }
}