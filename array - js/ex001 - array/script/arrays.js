// retornar valor 
/*
let botao = window.document.getElementById('btn_valor'); 

botao.addEventListener('click', gerar_valores); 

function gerar_valores() {
    let numbers = [document.getElementById('txtN1').value, document.getElementById('txtN2').value, document.getElementById('txtN3').value ]; 
    //resposta 
    let res = window.document.getElementById('res'); 

    if (numbers[0].length === 0 || numbers[0].length === 0 || numbers[0].length === 0 ) {
        window.alert('(ERRO) - digite todos os valores'); 
    } else {
        res.innerHTML = `O primeiro valor digitado: ${numbers[0]}<br> <br>`; 
        res.innerHTML += 'O segundo valor digitado: ' + numbers[1] + '<br> <br>'; 
        res.innerHTML += 'O primeiro valor digitado: ' + numbers[2] + '<br> <br>'; 
    }
}

*/


let num = [2, 4, 6]; 

num.push(1); 
num.push(3); 
num.push(5); 
num.sort(); 

for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])
}

console.log('O primeiro valor é: ' + num[0]); 
console.log('O valor 4 está na indíce: ' + num.indexOf(4));
console.log('TOTAL DE VALORES: ' + num.length);  