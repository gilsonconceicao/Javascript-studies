

// contagem de 1 até 25 

function contar() { 
    let res = window.document.getElementById('res');

    let n = 1; 
    while (n <= 30) {
        res.innerHTML += ` ${n}`; 
        n++
    }
}