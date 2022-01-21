// contagem com dois inputs de opções 

function contagem_duplo() {
    // input numbers
    let inicio = document.getElementById('numero01').value; 
    let fim = document.getElementById('numero02').value; 
    let res_contagem = 0; 

    //resposta
    let res = window.document.getElementById('res'); 

    let valor = inicio; 

    while ( valor <= fim) {
        res_contagem += ` ${valor}`; 
        valor++
    }

    res.innerHTML = res_contagem; 
}