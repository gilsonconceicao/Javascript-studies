    // contagem de acordo com a opção selecionada

    function contagem() {
        // input:radio 
        let contagem = window.document.getElementsByName('contagem');
        let res_contagem = 0;

        // resposta
        let res = window.document.getElementById('res');

        let valor = 1;

        if (contagem[0].checked) {
            for (valor; valor <= 10; valor++) {
                res_contagem += ` ${valor}`;
            }
        } else if (contagem[1].checked) {
            for (valor; valor <= 20; valor++) {
                res_contagem += ` ${valor}`;
            }
        } else if (contagem[2].checked) {
            for (valor; valor <= 30; valor++) {
                res_contagem += ` ${valor}`;
            }
        } else if (contagem[3].checked) {
            for (valor; valor <= 40; valor++) {
                res_contagem += ` ${valor}`;
            }
        }


        res.innerHTML = res_contagem;
    }