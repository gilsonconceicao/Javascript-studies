// Contagem de array 

function percorrerIntervalo(qtdNumber) {
    let numberAtual = 0
    for (let i = 10 ; i <= 20 ; i++) {
        if (qtdNumber[i] > 10 && qtdNumber[i] < 20) {
            return qtdNumber ++
        } else {
            return ''
        }
    }
    console.log(numberAtual)
}

valores = [10,12,13,14,15,16,18,19,20]
percorrerIntervalo(valores)
