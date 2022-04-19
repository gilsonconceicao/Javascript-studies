const sequencia = {
    _valor: 1, // convenção 
    get valor() {
        return this._valor++
    },
    set valor(valor) {
        if (valor > this._valor1) {
            this._valor1 = valor
        }
    }
}

console.log(sequencia.valor, sequencia._valor)