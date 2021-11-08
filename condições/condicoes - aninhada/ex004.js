// pratica 02 de horário se é bom dia, boa tarde ou boa noite. 

var agora = new Date(); 
var hora = agora.getHours(); 

hora = 12

if (hora <= 12) {
    console.log('Bom dia!'); 
}
else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!'); 
}
else {
    console.log('Boa noite!')
}