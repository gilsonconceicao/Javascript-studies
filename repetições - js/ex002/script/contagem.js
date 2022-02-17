
// contar de 1 até 20 - teste lógico no início 


function contar() {
    let res = window.document.getElementById('res'); 

    let n = 1
    do {
        console.log('passo' + n); 
        res.innerHTML += ` ${n}`
        n++
    } while (n <= 20);;  
}