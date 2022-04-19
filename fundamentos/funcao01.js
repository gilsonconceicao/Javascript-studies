// exemplos básicos de função

function imprimirSoma ( a , b=2 ) {
    console.log( a + b );  
} 

imprimirSoma(2); 

// função com return

function soma(a, b = 4) {
    return a + b; 
}

console.log(   soma(6)     )