// contador completo 

function contar() {
    // input:numbers
    let inicio = window.document.getElementById('txtI'); 
    let fim = window.document.getElementById('txtF')
    let passo = window.document.getElementById('txtP'); 

    // resposta 
    let res = window.document.getElementById('res'); 

    if (inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0) {
        window.alert('[ERRO] digite os dados corretamente.')
    } else {
        // transform 
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);

        res.innerHTML = 'Contando... <br>'; 

        if (p == 0 ) {
            window.alert('[ERRO] impossível contar.'); 
            p = 1; 
        } 
        if (i < f) {
            for (let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for (let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c}`; 
            }
        }
    }
}