function tratarErroeLancar() {
    //throw new Error ('...'); 
    throw 'Erro ao enviar para o console.'
}

function imprimirNome(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!'); 
    } catch (e) {
        tratarErroeLancar(e)
    }
   
}

const obj = {nome: 'Junior'}
imprimirNome(obj)