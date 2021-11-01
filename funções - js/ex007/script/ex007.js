// cliques 

var block01 = window.document.getElementsByTagName('div')[1];
block01.addEventListener('click', cliqueB1);
block01.addEventListener('mouseout', sair_block01);

function cliqueB1() {
    block01.style.background = 'black';
    block01.style.color = 'dodgerblue';
}

function sair_block01() {
    block01.style.background = 'purple';
    block01.style.color = 'white';
}

// bloco 02 

var block02 = window.document.getElementsByTagName('div')[2];
block02.addEventListener('dblclick', duploclique);
block02.addEventListener('mouseout', sairBlock02);

function duploclique() {
    block02.style.height = '200px';
}

function sairBlock02() {
    block02.style.borderRadius = '20%';
    block02.style.height = '100px';
}

// bloco 03 

var block03 = window.document.getElementsByTagName('div')[3];
block03.addEventListener('mouseenter', moverMouse);
block03.addEventListener('mouseout', sairBlock03);

function moverMouse() {
    block03.style.borderRadius = '100%';
    block03.style.width = '90px';
}

function sairBlock03() {
    block03.style.borderRadius = '0%'
    block03.style.width = '200px'
}

// mostrar paragrafo 

var m_paragrafo = window.document.getElementById('p_mostrar')
m_paragrafo.addEventListener('click', clicarP)
m_paragrafo.addEventListener('mouseout', mousesair)

function clicarP() {
    m_paragrafo.style.background = '#2a2a2a'

    m_paragrafo.innerHTML  = '&#9660; <br> Mostrar paragrafo! O javascript é uma linguagem de programação para interatividade web. '
}

function mousesair() {
    m_paragrafo.innerHTML = '&#9654; '

}