
// cabeçalho 
var cabecalho = window.document.getElementsByTagName('header')[0]
cabecalho.style.background = '#2a2a2a'
cabecalho.style.borderBottom = '3px solid dodgerblue'

// menu opções
var menu = window.document.getElementsByClassName('link-menu')[2]
menu.style.background = '#1e8fff6d'
menu.style.borderRadius = '20px'

// caixas e cores
var textDoc = window.document.getElementById('document')
textDoc.style.background = 'dodgerblue'
textDoc.style.color = 'white'


var textVar = window.document.getElementsByClassName('variaveis')[0]
textVar.style.background = 'tomato'
textVar.style.color = 'white'
textVar.style.padding = '5% 10px '


var textOpera = window.document.getElementsByClassName('operadores')[0]
textOpera.style.background = 'black'
textOpera.style.padding = '2% 10px'
textOpera.style.color = 'white'


// mudanças de titulos
var titul0Menu = window.document.getElementsByTagName('h1')[0]
titul0Menu.style.color = 'orangered'
titul0Menu.innerHTML = 'Document Object Model'

var titCaixa1 = window.document.getElementsByTagName('h1')[1]
titCaixa1.innerHTML = 'DOM em JS '

var titcaixa3 = window.document.getElementsByTagName('h2')[3]
titcaixa3.innerHTML = 'OPERADORES EM JAVASCRIPT'

// paragrafos
var p1 = window.document.getElementsByTagName('p')[0]
p1.innerHTML = 'Tudo sobre o Document Object Model em uma simples pagina. Aqui estou praticando o DOM em js pegando e mudando elementos. '

