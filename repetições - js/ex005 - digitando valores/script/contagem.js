
// contagem de acordo com o digito 

function contagem() {
    // input:number
    let n_digito = window.document.getElementById('n_digito').value; 
    let res_digito = 0; 

    // resposta
    var res = window.document.getElementById('res'); 
    

    for (let valor = 1 ; valor <= n_digito ; valor++) {
        res_digito += ` ${valor}`; 
    }

    res.innerHTML = res_digito;  
}