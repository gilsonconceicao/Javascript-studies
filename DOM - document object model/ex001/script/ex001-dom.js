// introduzoindo o DOM, começando pelo cabeçalho

//fundo-titulo
var fundo = window.document.body.getElementsByTagName('header')[0]
fundo.style.background = 'orangered'
fundo.style.borderBottom = '4px solid black'

//tiulo
var titulo = window.document.getElementsByTagName('h1')[0]
titulo.style.textDecoration = 'underline'

//caixas
var caixa = window.document.getElementById('text-lorem')
caixa.style.background = 'dodgerblue'

window.document.getElementsByClassName('titulo-lorem')[0].style.color = 'orangered'

// caixa1
var caixa1 = window.document.getElementById('article01').style.background = 'tomato'

// caixa3
var caixa3 = window.document.getElementsByTagName('article')[2]
caixa3.style.background = 'aqua'
caixa3.style.borderTop = '3px solid dodgerblue'

// summary 
var sum = window.document.getElementsByTagName('summary')[0].style.borderRadius = '30px'

var list = window.document.getElementsByTagName('ul')[0]
list.style.fontSize = '18px'
list.style.color = 'dodgerblue'

// paragrafos 
var paragrafo1 = window.document.getElementsByTagName('p')[0]
paragrafo1.style.color = 'black'

var paragrafo2 = window.document.getElementsByClassName('p2')[0].style.color = 'purple'

var paragrafo3 = window.document.getElementsByTagName('p')[3]
paragrafo3.style.fontSize = '13px'
paragrafo3.style.background = 'grey'

