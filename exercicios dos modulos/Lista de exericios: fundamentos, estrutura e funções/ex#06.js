/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true ou false.
*/

(function() {
    function numeroDivisivelPor3(n1) {
        if (n1 % 3 == 0) {
            return 'true'
        } else {
            return 'false'
        }
    }
    console.log(numeroDivisivelPor3(9))
    console.log(numeroDivisivelPor3(134))
})()