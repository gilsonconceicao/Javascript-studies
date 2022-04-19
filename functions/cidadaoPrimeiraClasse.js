// função em JS é First-Class Object 
// Higher-order function

// criar de forma literal 

function fun1() {} 

// armazena a função em uma variável  
const fun2 = function() {}

// armazena em um array 
const array = [function (a,b){return a +b }, fun1, fun2]; 
console.log(array[0](7,3));

// armazena em um atriburio de organizado. 
const obj = {}; 
obj.falar = function () { return 'Opa!' } ; 
console.log(obj.falar()); 

// passar função por parâmetro 

function soma(a,b) {
    return function (c) {
        console.log(a + b + c); 
    }
}
soma(3, 3)(1); 