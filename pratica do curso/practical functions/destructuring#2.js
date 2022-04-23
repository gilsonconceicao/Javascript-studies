// mais uma pratica com object 

const lojas = {
    loja01: 'Americanas', 
    loja02: 'Casas Bahia', 
    lojas03: 'Kalunga'
}

const {loja01: primeiraLoja, loja02: segundaLoja, lojas03: terceiraLoja } = lojas; 

console.log(primeiraLoja, segundaLoja, terceiraLoja)