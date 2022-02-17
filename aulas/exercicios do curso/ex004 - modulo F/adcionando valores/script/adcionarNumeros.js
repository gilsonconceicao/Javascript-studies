

let num = window.document.querySelector('input#fnum'); 
let listaa = window.document.querySelector('select#flista'); 
let res = window.document.querySelector('div#res');
let valoares = []; 


function insNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true; 
    } else {
        return false; 
    }
}

function insLista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true; 
    } else {
        return false; 
    }
}

function adicionar() {
    if (insNumero(num.value) && !insLista(num.value), valores) {
        valores.push(Number(num.value)); 
    } else {
        window.alert('Número invãlido ou já existente na lista. ')
    }
}