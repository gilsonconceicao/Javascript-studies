// mostrar e ocultar o menu 

var botao_menu = window.document.getElementById('btn_menu'); 

botao_menu.addEventListener('click', function () {
    let list_menu = window.document.getElementById('list_menu'); 

    if (list_menu.style.display === 'block') {
        list_menu.style.display = 'none'; 
        botao_menu.innerHTML = '&#9776;'
    } else {
        list_menu.style.display = 'block'; 
        botao_menu.innerHTML = '&#10006;'; 
        list_menu.style.transform = 'all .8s';
    }
}); 