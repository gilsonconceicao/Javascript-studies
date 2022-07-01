// aumento de sálario

/*
    Plano a: 10%
    Plano b: 15%
    Plano c: 20%
*/

(function() {
    let plano = 'a'
    let salario = 2000;
    switch (plano) {
        case 'a':
            salario * 0.2
            break;
        case 'b':
            salario * 0.5
            break;
        case 'c':
            salario * 0.10
            break;
        default: 'Ops, não temos esse plano aqui.'
            break;
    }

    console.log(plano)
})()
