// maneira 02

const testName = {
    profissao: 'Programador', 
    falarProfissao() {
        console.log(this.profissao)
    }
}
testName.falarProfissao()