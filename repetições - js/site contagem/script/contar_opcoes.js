// contagem de numeros através de opções 

function escolha_opcao() {
    // input:radio 
    let opcoes = window.document.getElementsByName('opcoes'); 
    let res_opcoes = 0; 

    // resposta 
    let res = window.document.getElementById('res_opcao'); 

    let valor = 1; 

    if (opcoes[0].checked) {
        for (valor ; valor <= 10 ; valor++) {
            res_opcoes += ` ${valor}`; 
        } 
    } else if (opcoes[1].checked) {
        for (valor ; valor <= 15 ; valor++ ) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[2].checked) {
        for (valor; valor <= 20 ; valor++ ) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[3].checked) {
        for (valor ; valor <= 25 ; valor++) {
            res_opcoes += ` ${valor}`; 
        }
    } else if (opcoes[4].checked) {
        for (valor ; valor <= 30 ; valor++ ) {
            res_opcoes += ` ${valor}`; 
        }
    }

    res.innerHTML = res_opcoes;
}