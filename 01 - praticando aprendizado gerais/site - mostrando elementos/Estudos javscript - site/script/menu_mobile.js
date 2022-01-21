// menu mobile 

var btn_menu_mobile = window.document.getElementById('btn_mobile'); 

btn_menu_mobile.addEventListener('click', function() {

    let lista_menu_mobile = window.document.getElementById('list_menu_mobile'); 

    if (lista_menu_mobile.style.display === 'block') {
        lista_menu_mobile.style.display = 'none'; 
    } else {
       lista_menu_mobile.style.display = 'block'; 
    }
}); 


