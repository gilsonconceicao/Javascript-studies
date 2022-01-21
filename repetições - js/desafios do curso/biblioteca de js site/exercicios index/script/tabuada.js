// tabuada completa 

function tabuada() {
    let tabuada = [document.getElementById('txtN'), document.getElementById('seltab')]; 

    if (tabuada[0].length == 0 ) {
        window.alert('[ERRO] --> digite um valor para gerar a tabuada.');
    } else {
        let n = Number(tabuada[0].value); 
        tabuada[1].innerHTML = ''; 
        let c = 1; 
        while (c <= 10) {
            let item = document.createElement('option'); 
            item.text = ` ${n} x ${c} = ${n*c} `; 
            item.value = `${c}`;
            tabuada[1].appendChild(item);  
            c++; 
        }
    }
}