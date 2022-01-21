/* praticando variáveis e operadores aritméticos, atribuição e destribuição. 
-- lembre-se, é importante praticar muito e no node.js também. 
*/ 

// seja bem vindo 
window.alert("Olá, seja muito bem vindo(a)");

// --------- nome de usuário -------- 
var nome = window.prompt(`Qual é o seu nome? `);
window.alert(`Muito prazer, ${nome}! Vamos realizar alguns opredares.`);

// nome console
window.console.log (
    `O seu nome é ${nome}.`
)

// ------------ idade -------
var ano_nasc = window.prompt(`${nome}, antes de mais nada, qual ano você nasceu?`);
var ano_atual = 2021;
var idade = ano_atual - ano_nasc;
window.confirm (`A sua idade é: ${idade} anos.`);

// idade do usuário
window.console.log (
    `A sua idade é: ${idade} anos. `
)

// ------------ conta de adição -------------
window.alert(`${nome}, vamos começar com adição!`);
var adicao_N1 = Number(window.prompt(`${nome}, digite um número para somar: `));
var adicao_N2 = Number(window.prompt(`${nome}, digite mais um número para somar com ${adicao_N1}: `));
var valor_adicao = adicao_N1 + adicao_N2; 
window.alert(`A soma de ${adicao_N1} mais ${adicao_N2} é igual a: ${valor_adicao}.`);

// resultado da adição 
window.console.log (
    `O valor da soma foi: ${valor_adicao}.`
)

// ----------- conta p/ subtrair ------------
window.alert(`${nome}, vamos agora subitrair.`); 
var menos_N1 = Number(window.prompt(`${nome}, digite um número para subitrair: `)); 
var menos_N2 = Number(window.prompt(`Por qual número deseja subitrair o valor ${menos_N1}? `)); 
var valor_menos = menos_N1 - menos_N2;
window.alert(`O valor de ${menos_N1} menos ${menos_N2} restou-se: ${valor_menos}`);

// resultado da subitração 
window.console.log (
    `O valor da subitração foi: ${valor_menos}.`
)

// ---------- conta de multiplicação ---------
window.alert(`${nome}, vamos agora multiplicar`); 
var vezes_N1 = Number(window.prompt(`${nome}, digite um número para multiplicar: `)); 
var vezes_N2 = Number(window.prompt(`Por qual número deseja multiplicar o valor ${vezes_N1}? `)); 
var valor_vezes = vezes_N1 * vezes_N2; 
window.alert(`O valor de ${vezes_N1} X ${vezes_N2} é igual a ${valor_vezes}`);

// resultado da multipliação 
window.console.log (
    `O resultado da multiplicação: ${valor_vezes}. `
)

// -------------- conta de devisão ------------
window.alert(`Vamos agora dividir valores, ${nome}`); 
var dividirN1 = Number(window.prompt(`Digite um valor para dividir: `));
var dividirN2 = Number(window.prompt(`Deseja dividir ${dividirN1} por: `));
var valor_dividir = dividirN1 / dividirN2
window.alert(`O resultado de ${dividirN1} dividido por ${dividirN2} é igual a: ${valor_dividir}`); 

// resultado da divisão 
window.console.log (
    ` Por ultimo, a divisão foi igual a: ${valor_dividir}. `
)