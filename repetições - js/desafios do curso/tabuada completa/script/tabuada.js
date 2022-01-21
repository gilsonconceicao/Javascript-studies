// tabuada completa  

function tabuada_completa() {
    // numero 
    let num = window.document.getElementById('txtN').value; 
    let tab = window.document.getElementById('selTab'); 

    if (num.length === 0 ) {
        window.alert('[ERRO] - digite um valor!')
    } else {
        
        let c = 1; 
        tab.innerHTML = ''; 
        
        while (c <= 10 ) {
            let opcoes = window.document.createElement('option');
            opcoes.text = ` ${c} x ${num} = ${c*num}`;  
            opcoes.value = ` ${c}`; 
            tab.appendChild(opcoes); 
            c++; 
        }
    }
}