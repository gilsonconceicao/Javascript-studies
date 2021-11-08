// Prática 03 do limite de idade para votar

var idade = 70; 
console.log('A sua idade é ' + idade + ' anos.'); 

if (idade < 16 ) {
    console.log('Não pode votar'); 
}
else if (idade < 18 || idade > 65 ) {
    console.log ('O seu voto é opcional. '); 
} 
else {
    console.log('O seu voto é obrigatório.'); 
}