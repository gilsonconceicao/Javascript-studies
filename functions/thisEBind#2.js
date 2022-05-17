// JS Setinterval

function contador () {
    this.currentNumber = 0 

    setInterval (function () {
        this.currentNumber++
        console.log(this.currentNumber)
    }.bind(this), 1000)
}

new contador()