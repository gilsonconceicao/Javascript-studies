
// quando clicar 
var blck1 = window.document.getElementById('box_fun')
blck1.addEventListener('mouseenter', entrou)
blck1.addEventListener('click', click)
blck1.addEventListener('dblclick', cliqueduplo)
blck1.addEventListener('mouseout', sair)


function entrou() {
    blck1.innerHTML = 'Entrou'
    blck1.style.background = 'purple'
    blck1.style.color = 'white'
}

function click(){
    blck1.innerHTML = 'Clicou uma vez!'
    blck1.style.background = 'orangered'
    blck1.style.width = '600px'
    blck1.style.textDecoration = 'underline'
}

function cliqueduplo() {
    blck1.innerHTML = 'Clique duplo.'
    blck1.style.width = '200px'
    blck1.style.textDecoration = 'none'
    blck1.style.lineHeight = '1.5em'
    blck1.style.background = '#2a2a2a'
    blck1.style.color = 'white'
    blck1.style.fontSize = '25px'
}

function arrasta() {
    blck1.innerHTML = 'aproxime'
    blck1.style.background = 'orange'
    blck1.style.width =  '700px' 
}

function sair() {
    blck1.innerHTML = 'Saiu!'
    blck1.style.width = '200px'
    blck1.style.lineHeight = '200px'
    blck1.style.background = 'dodgerblue'
}