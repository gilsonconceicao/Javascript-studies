// horário atual 
var data = new Date();
var horario = data.getHours();

// temas da pagina 

var corpo = window.document.body;
var cabeçalho = window.document.getElementsByTagName('header')[0];
var titulo_ex = window.document.querySelector('main > article h2');

// declaradas com var para poder pegar nas duas fuções

function tema_claro() {
        // input:radio - escuro 

        // Corpo 
        corpo.style.background = 'white';
        corpo.style.color = 'black';
        corpo.style.transition = '.8s';

        //cabeçalho 
        cabeçalho.style.background = '#242424';
        cabeçalho.style.color = 'white';

        // titulo 
        titulo_ex.style.color = 'black';
        titulo_ex.style.background = '#7700d82c';


}

function tema_escuro() {
        // input:radio - escuro 

        // Corpo 
        corpo.style.background = '#2a2a2a';
        corpo.style.color = 'white';
        corpo.style.transition = '.8s';

        //cabeçalho 
        cabeçalho.style.background = 'white';
        cabeçalho.style.color = 'black';

        // titulo 
        titulo_ex.style.color = 'white';
        titulo_ex.style.background = '#8c00ff';

}