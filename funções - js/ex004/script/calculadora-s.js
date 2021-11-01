// calculadora de adição simples 

function somar() {
    var n1 = Number(textN1.value); 
    var n2 = Number(textN2.value);
    var s = n1 + n2 
    var resposta = window.document.getElementsByClassName('res')[0]
    resposta.innerHTML = ` ${n1} + ${n2} = ${s}`
}

function multiplicar() {
    var vezesN1 = Number(input_vezesN1.value);
    var vezesN2 = Number(input_vezesN2.value);
    var valor_vezes = vezesN1 * vezesN2; 
    var res_vezes = window.document.getElementsByClassName('res_vezes')[0]
    res_vezes.innerHTML = ` ${vezesN1} x ${vezesN2} = ${valor_vezes}`
}