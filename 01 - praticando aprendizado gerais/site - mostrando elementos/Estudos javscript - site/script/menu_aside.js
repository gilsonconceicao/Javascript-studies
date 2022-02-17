// mostrar e ocultar menu

var btn_menu = window.document.getElementById('button_menu');

btn_menu.addEventListener('click', function() {
    let list = window.document.getElementById('menu_aside');
    let areaAside = window.document.getElementById('nav_lateral'); 
    

    if (list.style.display == 'block') {
        list.style.display = 'none'; 
        areaAside.style.backgroundColor = '#bebebe'
        areaAside.style.width = '50px'; 
        btn_menu.innerHTML = '&#9776;'; 
        btn_menu.style.color = 'black'; 
    

    } else {
        list.style.display = 'block'; 
        areaAside.style.backgroundColor = '#242424'
        areaAside.style.width = '500px'; 
        btn_menu.innerHTML = '&#10006;'; 
        btn_menu.style.color = 'white'; 
       
    }
})
