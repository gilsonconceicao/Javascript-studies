// this e a função bind JS

const Teste = {
    soma: 1, 
    testeSomaFun(num) {
        console.log(num + this.soma)
    }
}

Teste.testeSomaFun(6)
