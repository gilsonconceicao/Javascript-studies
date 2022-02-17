// PRÁTICA 03 - praticando switch com opções de Segunda a domingo seguindo a ordem: 

var agora = new Date(); 
var diaSem = agora.getDay(); 

diaSem = 0;

switch (diaSem) {
    case 0:
        console.log('Domingo'); 
        break;
    case 1: 
        console.log ('Segunda');
        break; 
    case 2: 
        console.log('Terça'); 
        break; 
    case 3: 
        console.log('Quarta'); 
        break; 
    case 4: 
        console.log ('Quinta'); 
        break; 
    case 5: 
        console.log('Sexta'); 
        break; 
    case 6: 
        console.log ('Sábado'); 
        break;  
    default:
        console.log('Erro! Dia da semana inválido, nossos dias são de 0 a 6.')
        break;
}