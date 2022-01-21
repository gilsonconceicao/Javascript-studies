// tabuada completa

function tabuada() {
    // input:numbers
    let num = document.getElementById('txtN'); 
    let tab = document.getElementById('seltab'); 

    if (num.value.length === 0) {
        window.alert('[ERRO] digite um número para multiplicar'); 
    } else {
        let n = Number(num.value); 
        tab.innerHTML = ''; 
        // loop
        let c = 1; 
        while (c <= 10 ) {
            let item = document.createElement('option'); 
            item.text = `${n} x ${c} = ${n*c}`; 
            item.value = `${c}`; 
            tab.appendChild(item); 
            c++; 
        }
    }
}