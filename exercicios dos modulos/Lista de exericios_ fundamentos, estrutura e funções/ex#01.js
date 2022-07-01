/* Questão 01
Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, sbtração, multiplicação e divisão desses valores. 
*/

function myValues(n1, n2) {
    return {
        showValuesNumber() {
            console.log('Os valores são: ', n1, 'e', n2)
            console.log(`Soma: ${n1+n2}`);
            console.log(`Subtração: ${n1-n2}`);
            console.log(`Multiplicação: ${n1*n2}`);
            console.log(`Divisão: ${n1/n2}`);
        }
    }
}

const values01 = myValues(10, 5); 
values01.showValuesNumber()