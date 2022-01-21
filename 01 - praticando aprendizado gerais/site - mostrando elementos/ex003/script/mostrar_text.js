// mostrar elementos em textos

var botao = window.document.getElementById('btn_mostrar'); 

botao.addEventListener('click', function() {
    let paragrafo = window.document.getElementById('text'); 
    let cont = window.document.getElementById('conteiner'); 

    if (paragrafo.style.display === 'block') {
        paragrafo.style.display = 'none'; 
        paragrafo.style.opacity = '0'
        cont.style.height = '36px'; 
        botao.innerHTML = '&#9678;'
    } else {
        paragrafo.style.display = 'block'; 
        cont.style.height = '200px'; 
        botao.innerHTML = '&#9673;';
        paragrafo.style.opacity = '100%'
    }
}); 