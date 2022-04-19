// arrow function`s 

// padrão 

let dobro = function(n) {
    return n*2 
}

console.log(dobro(2)); 

// arrow function

dobro = (n1) => {
    return 2 * n1; 
}
console.log(dobro(1)); 

// arrow direto com apenas 1 parâmetro 

let dobroFun = a => console.log(2 * a); //retorno implicito 
dobroFun(8)

let ola = function () {
   return 'Olá!' 
}

ola = () => 'Olá!'; 
console.log(ola())