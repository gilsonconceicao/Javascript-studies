// contagem completa feira com array 

function contador_completo() {
    // digitos
    let itens = [ document.getElementById('txtI'), document.getElementById('txtP'), document.getElementById('txtF'), document.getElementById('res')];

    if (itens[0].value.length == 0 || itens[1].value.length == 0 || itens[2].value.length == 0) {
        window.alert('[ERRO] ---> digite os dados para contar.'); 
    } else {
        // tramsform 
        let i = Number(itens[0].value);  
        let p = Number(itens[1].value); 
        let f = Number(itens[2].value); 

        itens[3].innerHTML = ` Contando... <br>`; 

        if (i < f) {
            for(let c = i; c <= f ; c += p ) {
                itens[3].innerHTML += ` ${c}`
            }
        } else {
            for (let c = i ; c >= f ; c -= p ) {
                itens[3].innerHTML += ` ${c}`
            }
        }
    }
}