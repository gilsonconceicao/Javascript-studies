// contador completo - progresso e regresso
 
function contador_completo() {
    // numbers 
    let fase = [document.getElementById('txtI'), document.getElementById('txtP'), document.getElementById('txtF')]; 
    // resposta 
    let res = window.document.getElementById('res_contador')
    if (fase[0].value.length == 0 || fase[1].value.length == 0 || fase[2].value.length == 0) {
        window.alert('[ERRO] ---> digite os dados em seus campos.')
    } else {
        // transform
        let i = Number(fase[0].value); 
        let p = Number(fase[1].value);
        let f = Number(fase[2].value);

        res.innerHTML = ` Contando... <br><br>`
        res.style.textAlign = 'center'
        if (i < f ) {
            for (let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for (let c = i ; c > f ; c -= p) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}