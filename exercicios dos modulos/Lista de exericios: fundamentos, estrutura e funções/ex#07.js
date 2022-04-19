// dias 

var day = 6; 
var nameDay = ''
var situationDay =''
switch (day) {
    case 1:
        nameDay = 'Segunda';  
        situationDay = 'dia útil'
        break;
    case 2: 
        nameDay = 'Terça';
        situationDay = 'dia útil'
        break
    case 3:
        nameDay = 'Quarta'; 
        situationDay = 'dia útil'
        break
    case 4: 
        nameDay = 'Quinta'; 
        situationDay = 'dia útil'
        break 
    case 5: 
        nameDay = 'Sexta'; 
        situationDay = 'dia útil'
        break
    case 6: 
        nameDay = 'Sábado'; 
        situationDay = 'final de semana'
        break; 
    case 7: 
        nameDay = 'Domingo'; 
        situationDay = 'final de semana'
        break
    default: 'Lamento, não foi possível encontrar...'
        break;
}

console.log(`O dia é ${nameDay} é considerado ${situationDay}`)