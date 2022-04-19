// armazenando uma função em uma const

const somarFuncao = function (a, b ) {
    console.log('Soma de: ', a+b); 
}

somarFuncao(10,9); 

// armazenando a função em uma Arrow Function 

const multiplicar = (x, y) => {
    return x * y; 
}

console.log('Multiplicação: ' + multiplicar(7,3)) 