function boanoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado! Com a nota: ' + nota); 
    } else {
        console.log('Reprovado! Com a nota: ' + nota); 
    }
}
boanoticia(10); 


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor); 
    }
}

seForVerdadeEuFalo(' Teste de function')