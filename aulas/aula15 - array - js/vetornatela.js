// pegando valores do array com loop 
let botao = document.getElementById('btn_console'); 
botao.addEventListener('click', mostrar_console)

function mostrar_console() {
    // valores
    let valores = [document.getElementById('txtN1').value, document.getElementById('txtN2').value, document.getElementById('txtN3').value];

    // resposta 
    let res = window.document.getElementById('res');
    
    res.innerHTML = ` ${valores}`;
    
}

