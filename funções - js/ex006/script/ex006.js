// calculadora js 

// soma 

function botãoMais() {
var somarN1 = Number(adicaoN1.value);
var somarN2 = Number(adicaoN2.value);
var valor_soma = somarN1 + somarN2;
var res_mais = window.document.getElementsByClassName('res_mais')[0];
res_mais.innerHTML = `${somarN1} + ${somarN2} = ${valor_soma}`; 
}

function botãoMenos() {
    var menosN1 = Number(subtrairN1.value);
    var menosN2 = Number(subtrairN2.value);
    var valor_menos = menosN1 - menosN2;
    var res_menos = window.document.getElementsByClassName('res_menos')[0]; 
    res_menos.innerHTML = `${menosN1} - ${menosN2} = ${valor_menos}`; 
}

function botãovezes() {
    var vezes_N1 = Number(vezesN1.value);
    var vezes_N2 = Number(vezesN2.value);
    var valor_vezes = vezes_N1 * vezes_N2;
    var res_vezes = window.document.getElementsByClassName('res_vezes')[0]; 
    res_vezes.innerHTML = `${vezes_N1} x ${vezes_N2} = ${valor_vezes}`; 
}

//interações com cliques e mover mouse 

// bloco 01 
var block01 = window.document.getElementById('bloco_1');
block01.addEventListener('click', clicar_bloco1);
block01.addEventListener('mouseout', sair_bloco01);

function clicar_bloco1() { 
    block01.style.height = '30px';
    block01.style.lineHeight = '30px';
    block01.style.background = 'tomato';
}
function sair_bloco01() {
    block01.style.height = '200px';
    block01.style.background = 'teal';
    block01.style.lineHeight = '200px';
}

// bloco02 
var block02 = window.document.getElementById('bloco_2'); 
block02.addEventListener('mouseenter', enter_bloco_2); 
block02.addEventListener('mouseout', sair_bloco_2); 

function enter_bloco_2() {
    block02.innerHTML = ' 2 | Entrou!';
    block02.style.background = 'orangered';
}

function  sair_bloco_2() {
    block02.innerHTML = ' 2 | Saiu!';
    block02.style.background = 'teal';
}

// bloco 03 

var block03 = window.document.getElementById('bloco_3');
block03.addEventListener('dblclick', cliqueduplo);
block03.addEventListener('mouseout', sair_bloco03)

function cliqueduplo() {
    block03.innerHTML = 'Mova pra sair';
    block03.style.borderRadius = '100%';
    block03.style.background = 'red';
}

function sair_bloco03() {
    block03.innerHTML = '3 | clique-duplo';;
    block03.style.borderRadius = '0%';
    block03.style.background = 'teal';
}

// bloco 04 

var block04 = window.document.getElementById('bloco_4'); 
block04.addEventListener('click', clicarbloco04)
block04.addEventListener('mouseout', sairBloco04)

function clicarbloco04() {
    block04.innerHTML = 'FIM'
    block04.style.background = 'black'
}
function sairBloco04() {
    block04.innerHTML = 'Obrigado!'
    block04.style.background = 'teal'
}