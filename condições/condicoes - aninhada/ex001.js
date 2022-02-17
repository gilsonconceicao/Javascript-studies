// limite de idade para votar; 

var idade = 80; 

console.log (`A sua idade é ${idade} anos`); 
if (idade < 16) {
    console.log('Não pode votar. '); 

} else if (idade <= 18 || idade > 65 ) {
    console.log ('Voto opcional'); 
} else {
    console.log ('O seu voto é obrigatório.');
}