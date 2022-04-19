// else if 

const horario = new Date().getHours(); 
this
if (horario >= 4 && horario <= 12 ) {
    console.log('Bom dia!'); 
} else if (horario > 12 && horario < 18) {
    console.log('Boa tarde!'); 
} else {
    console.log('Boa noite!');
}