// mostrar e ocultar opcoes 


let btn01 = window.document.getElementById('btn_opcoes'); 

btn01.addEventListener('click', function() {
    let text01 = window.document.getElementById('box_paragrafo01'); 

    if (text01.style.display === 'block') {
        text01.style.display = 'none'; 
    } else {
        text01.style.display = 'block'; 
    }
});

// opcoes 02 
let btn02 = window.document.getElementById('btn_opcoes02'); 

btn02.addEventListener('click', function() {
    let text02 = window.document.getElementById('box_paragrafo02'); 

    if (text02.style.display === 'block') {
        text02.style.display = 'none'; 
    } else {
        text02.style.display = 'block'; 
    }
});

// opcoes 03
let btn03 = window.document.getElementById('btn_opcoes03'); 

btn03.addEventListener('click', function() {
    let text03 = window.document.getElementById('box_paragrafo03'); 

    if (text03.style.display === 'block') {
        text03.style.display = 'none'; 
    } else {
        text03.style.display = 'block'; 
    }
});

// opcoes 03
let btn04 = window.document.getElementById('btn_opcoes04'); 

btn04.addEventListener('click', function() {
    let text04 = window.document.getElementById('box_paragrafo04'); 

    if (text04.style.display === 'block') {
        text04.style.display = 'none'; 
    } else {
        text04.style.display = 'block'; 
    }
});
