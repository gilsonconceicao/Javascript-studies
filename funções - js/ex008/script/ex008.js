// calculadora com operadores aritméticos

// adição 

function somar() {
    var maisN1 = Number(input_MaisN1.value);
    var maisN2 = Number(input_MaisN2.value);
    var valor_soma = maisN1 + maisN2;
    var res_mais = window.document.getElementsByClassName('res_mais')[0];
    res_mais.innerHTML = `${maisN1} + ${maisN2} = ${valor_soma}`;

    console.log (
        `resultado da soma foi: ${valor_soma}`
    )
}

function subtrair() {
    var menosN1 = Number(input_MenosN1.value);
    var menosN2 = Number(input_MenosN2.value);
    var valor_menos = menosN1 - menosN2;
    var res_menos = window.document.getElementsByClassName('res_menos')[0]; 
    res_menos.innerHTML = `${menosN1} - ${menosN2} = ${valor_menos}`

    console.log (
        `resultado que restou-se: ${valor_menos}`
    )
}

function multiplicar() {
    var vezesN1 = Number(input_vezesN1.value); 
    var vezesN2 = Number(input_vezesN2.value); 
    var valor_vezes = vezesN1 * vezesN2; 
    var res_vezes = window.document.getElementsByClassName('res_vezes')[0];
    res_vezes.innerHTML = `${vezesN1} x ${vezesN2} = ${valor_vezes}`;

    console.log (
        `resultado da multiplicação: ${valor_vezes}`
    )
}

function divisão() {
    var dividirN1 = Number(input_dividirN1.value); 
    var dividirN2 = Number(input_dividirN2.value); 
    var valor_divisao = dividirN1 / dividirN2; 
    var res_divisao = window.document.getElementsByClassName('res_dividir')[0]; 
    res_divisao.innerHTML = `${dividirN1} / ${dividirN2} = ${valor_divisao}`; 

    console.log (
        `resultado da divisão: ${valor_divisao}`
    )
}


// CONTEINER DIVS - MOSTRAR CORES AO CLICAR 

// bloco 01 com bloco 02 

var block01 = window.document.getElementById('mostrar_cor01');
var block02 = window.document.getElementById('recebe_cor02');
block01.addEventListener('click', clicarBlock01);
block01.addEventListener('mouseout', sairBlock01);

function clicarBlock01() {
    block02.style.background = 'purple';
}

function sairBlock01() {
    block02.style.background = 'transparent';
}


// bloco 03 com o bloco 04

var block03 = window.document.getElementById('mostrar_cor03');
var block04 = window.document.getElementById('recebe_cor01');
block03.addEventListener('click', clicarBlock03);
block03.addEventListener('mouseout', sairBlock03);

function clicarBlock03() {
    block04.style.background = 'dodgerblue'
}

function sairBlock03() {
    block04.style.background = 'transparent'
}


// bloco 05 com o bloco 06 
 
var block05 = window.document.getElementById('mostrar_cor05');
var block06 = window.document.getElementById('recebe_cor06');
block05.addEventListener('click', clicarBlock05);
block05.addEventListener('mouseout', sairBlock05);

function clicarBlock05() {
    block06.style.background = 'orangered'; 
}

function sairBlock05() {
    block06.style.background = 'transparent'
}