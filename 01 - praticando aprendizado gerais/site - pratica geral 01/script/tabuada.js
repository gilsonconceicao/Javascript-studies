// gerar tabuada completa 

function gerar_tabuada() {
    let numero = window.document.getElementById('numtab'); 
    let tab = window.document.getElementById('tabSel'); 

    if (numero.value.length == 0 ) {
        window.alert('[ERRO] --> digite o dado!')
    } else {
        let n = Number(numero.value); 
        tab.style.display = 'block'; 
        let c = 1; 
        while(c <= 10) {
            let item = window.document.createElement('option'); 
            item.text = ` ${n} x ${c} = ${n*c}`; 
            item.value = ` ${c}`; 
            tab.appendChild(item); 
            c++
        }
    }
}