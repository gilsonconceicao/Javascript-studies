// operadres com condições 

function operacoes(trabalho1, trabalho2) {
    let tomarSorvete = trabalho1 || trabalho2; 
    let comprarTv50 = trabalho1 && trabalho2; 
    let comprarTv32 = trabalho1 != trabalho2; 
    let bemEstarSaude = !tomarSorvete; 

    return {tomarSorvete, comprarTv32, comprarTv50, bemEstarSaude}
}

console.log(operacoes(true, true)); 
console.log(operacoes(true, false));
console.log(operacoes(false, true));
console.log(operacoes(false, false));