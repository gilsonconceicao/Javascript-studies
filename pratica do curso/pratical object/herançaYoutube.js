const MeuObjeto = {
    a: 1, 
    b: 2
}

// MeuObjeto.__proto__ --> Object.prototype --> null

const meuarray = [1, 2, 3, 4 ]

// meuarray.__proto__ --> array.prototype --> object.prototype --> null

function minhaFuncao() {return 1+2}

// minhaFuncao.__proto__ --> function.prototype --> object.prototype --> null