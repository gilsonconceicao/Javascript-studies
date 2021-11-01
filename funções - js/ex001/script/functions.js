// praticando o uso do DOM e funções. 

// blocos orange 

var two_block = window.document.getElementsByTagName('div')[0]
two_block.style.background = 'orangered'

var two_block = window.document.getElementsByTagName('div')[2]
two_block.style.background = 'orangered'

// functions - Bloco 01

var bloco01 = window.document.getElementsByTagName('div')[0]

bloco01.addEventListener('click', clicar)
bloco01.addEventListener('mouseout', sair)
bloco01.addEventListener('mouseenter', entrou)

function clicar() {
    bloco01.innerHTML = 'Clicou'
    bloco01.style.background = 'red'
}

function entrou() {
    bloco01.innerHTML = 'Entrou'
}

function sair() {
    bloco01.innerHTML = 'saiu'       
    bloco01.style.background = 'orangered'
}

// functions - Bloco 02
var bloco02 = window.document.getElementsByTagName('div')[1]

bloco02.addEventListener('mousemove', float)
bloco02.addEventListener('click', clicando)

function float() {
    bloco02.style.transition = '.8s'
    bloco02.style.background = 'aqua'
}

function clicando() {
    bloco02.innerHTML = 'Junior'
}

// functions - Bloco 03
var bloco03 = window.document.getElementsByTagName('div')[2]

bloco03.addEventListener('dblclick', cliqueduplo)
function cliqueduplo() {
    bloco03.innerHTML = 'Santos'
}

// functions = bloco 04
bloco04 = window.document.getElementsByTagName('div')[3]
bloco04.addEventListener('click', click1)
function click1 () {
    bloco04.style.background = 'black'
    bloco04.style.color = 'white'
}