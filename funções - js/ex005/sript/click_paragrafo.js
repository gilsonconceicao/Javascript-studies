// clique mostre o paragrafo 

var click_p = window.document.getElementById('box_paragrafo')

click_p.addEventListener ('click', clicar)
click_p.addEventListener ('mouseout', sair)

var p_hover = window.document.getElementsByTagName('p')[0]
function clicar() {
    p_hover.style.display = 'block'
}

function sair() {
    p_hover.style.display = 'none'
} 