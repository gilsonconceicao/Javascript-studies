// prática 02 do programa de limite de idade para votar 

var idade = 16; 
console.log('A sua idade é ' + idade + ' anos.')

if (idade < 16 ) {
    console.log('Você não pode votar.'); 
}
else if (idade <= 18 || idade > 65) {
    console.log('O seu voto é opcional.'); 
}
else {
    console.log ('O seu voto é obrigatório.'); 
}