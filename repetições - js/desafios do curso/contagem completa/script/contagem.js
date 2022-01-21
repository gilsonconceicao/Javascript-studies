// contegem complta 

function contagem() {
    let numbers = [ window.document.getElementById('txtI'), window.document.getElementById('txtF'), window.document.getElementById('txtP')]; 

    let res = window.document.getElementById('res'); 

    if ( numbers[0].value.length === 0 || numbers[1].value.length === 0 || numbers[2].value.length === 0) {
        window.alert('(ERRO) - digite os dados corretamente.');
    } else {
        let i = Number(numbers[0].value); 
        let f = Number(numbers[1].value); 
        let p = Number(numbers[2].value);
        
        res.innerHTML = ''

        if (i < f ) {
            for (let c = i ; c <= f ; c += p ) {
                res.innerHTML += ` ${c}`
            }
        } else {
            for (let c = i ; c >= f ; c -= p ) {
                res.innerHTML += ` ${c}`
            }
        }
    }
}