// switch em js serve para aplicações de opções pontuais tipo: horários e dias da semana.
var agora = new Date(); 
var diaSem = agora.getDay(); 

diaSem = 8

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break;
    case 1: 
        console.log('Segunda')
        break
    case 2: 
        console.log ('Terça')
        break
    case 3: 
        console.log ('Quarta')
        break
    case 4: 
        console.log('Quinta') 
        break
    case 5: 
        console.log('Sexta')
        break
    case 6: 
        console.log ('Sabado')
        break
    default:
        console.log ('[ERRO] dia da semana invalido.')
        break;
}