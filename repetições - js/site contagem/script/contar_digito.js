// contagem de acordo com o digito 

function contar_digito() {
    // input:number 
    let n_digito = window.document.getElementById('n_digito').value; 
    let res_numero_digito = 0; 
    // resposta 
    let res = window.document.getElementById('res_digito'); 

    //      início     teste     incrementação 
    for (let valor = 1 ; valor <= n_digito ; valor++ ) {
        res_numero_digito += ` ${valor}`; 
    }

    res.innerHTML = res_numero_digito; 
}