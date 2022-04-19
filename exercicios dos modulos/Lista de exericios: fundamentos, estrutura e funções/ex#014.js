// plano de saúde

let idade = 17
let valorPlano = 100

if (idade <= 10) {
    valorPlano = 80
} else if (idade >= 10 && idade <= 30 ) {
    valorPlano = 50
} else if (idade >30 && idade <= 60) {
    valorPlano = 95
} else {
    valorPlano = 130
}

console.log(`Você tem ${idade} anos, o valor à ser pago é de R$ ${valorPlano},00`)