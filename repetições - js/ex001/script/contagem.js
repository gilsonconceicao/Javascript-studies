

// contagem de 1 até 2 

function contar() {
    let res = window.document.getElementById('res'); 

    let n = 1; 
    while (n <= 10 ) {
        res.innerHTML += ` ${n}`; 
        console.log('passo' + n); 
        n++ // para sempre acrescenter mais 1 
    } 
}

