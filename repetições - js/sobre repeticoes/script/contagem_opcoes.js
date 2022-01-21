// contagem de acorodo com a opção 

function contar_opcoes() { 
    // input:radio 
    let opcoes = document.getElementsByName('opcoes'); 
    let res_opcoes = 0; 

    // resposta 
    let res = document.getElementById('res_opcoes'); 

    let valor = 1; 

    if (opcoes[0].checked) {
        for (valor ; valor <= 10 ; valor++) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[1].checked) {
        for (valor ; valor <= 20 ; valor++) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[2].checked) {
        for (valor ; valor <= 30 ; valor++ ) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[3].checked) {
        for (valor ; valor <= 40 ; valor++ ) {
            res_opcoes += ` ${valor}`;   
        }
    }

    res.innerHTML = res_opcoes; 
}