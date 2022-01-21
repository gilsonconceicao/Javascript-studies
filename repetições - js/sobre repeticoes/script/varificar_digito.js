// contagem de acordo com o digito

function verificar_digito() {
    // input:number
    let n_digito = document.getElementById('n_digito').value; 
    let res_digito = 0; 

    // resposta 
    let res = document.getElementById('res_digito'); 

    let valor = 1; 

    for (valor ; valor <= n_digito ; valor++) {
        res_digito += ` ${valor}`; 
    }

    res.innerHTML = res_digito; 
}