/*
let btn_add = window.document.querySelector('#adiconar_btn');
var num = window.document.getElementById('fnum');
var lista = window.document.getElementById('flista');
var valores = [];;


function mostrar(numbers) {
    if (num.value == '') {
        window.alert('Erro, digite um valor.')
    } else {
        valores.push(num.value)
        let item = document.createElement('option');
        item.text = `o valor ${num.value} foi adicionado`;
        
        lista.appendChild(item, valores);
    }
}

btn_add.addEventListener('click', function () {
    mostrar();
});

*/ 


function pessoa(name) {
    return ` Pratique array, ${name}!`; 
}

console.log(pessoa('Junior')); 


// array 

var meuarray = ['1', '2', '3', '5' ]; 
meuarray.push(4); 
meuarray.sort(); 


console.log(meuarray); 

for (let c = 1 ; c <= meuarray.length ; c++ ) {
    console.log( ` ${c}`);
}


function objs(name02) {
    return ` pratique object, ${name02}!`; 
}
console.log(objs('Junior')); 

var meuObj01 = {
    nome01: 'Junior', 
    sobrenomes01: ['Conceição', 'Santos'], 
    idade01: 16, 
    paises01: {
        inglaterra01: 'Ingês', 
        Espanha01: 'Espanhol'
    } 
}

meuObj01.ano = 2022; 
delete meuObj01.ano

console.log(meuObj01); 
console.log(meuObj01.nome01);
console.log(meuObj01.sobrenomes01[1]); 
console.log(meuObj01.paises01.inglaterra01);
// --------- 2 
var meuObj02 = {
    nome: 'Cristiano', 
    sobrenomes: ['Ronaldo', 'Santos'], 
    idade: 37, 
    paises: {
        inglaterra: 'Ingês', 
        Portugal: 'Português'
    } 
}

meuObj02.ano = 2022; 
delete meuObj02.ano

console.log(meuObj02); 
console.log(meuObj02.nome);
console.log(meuObj02.sobrenomes[1]); 
console.log(meuObj02.paises.inglaterra);

var juntos = {
    ...meuObj01, 
    ...meuObj02
};
console.log(juntos)