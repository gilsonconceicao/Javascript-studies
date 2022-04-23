/* Switch condição */

const imprimirResultado = function(nota) {
    switch(nota) {
        case 10: 
        case 9: 
            console.log('Excelente estudante!'); 
            break; 
        case 8: case 7:
            console.log('Ótimo estudante!'); 
            break; 
        case 5: case 6: 
            console.log('Precisa se esforçar!'); 
            break
        
        default: console.log('Não encontramos uma nota válida!'); 
    }
}

imprimirResultado(10);
imprimirResultado(8); 
imprimirResultado(6); 
imprimirResultado(11);