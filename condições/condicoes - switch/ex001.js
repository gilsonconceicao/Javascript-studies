// praticando switch com opções de Segunda a domingo seguindo a ordem: 

/*
    No JS os dias da semane tem essa ordem: 

    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta 
    5 - Sexta
    6 - Sábado
*/

var agora = new Date(); 
var diaSem = agora.getDay();

switch (diaSem) {
    case 0:
        console.log('Domingo'); 
        break;
    case 1: 
        console.log('Segunda'); 
        break;
    case 2: 
        console.log ('Terça'); 
        break;
    case 3: 
        console.log('Quarta'); 
        break;
    case 4: 
        console.log('Quinta'); 
        break;
    case 5: 
        console.log('Sexta'); 
        break;
    case 6: 
        console.log('Sábado'); 
    default:
        console.log ('[ERRO] dia da semana invalido. ');
        break;
}