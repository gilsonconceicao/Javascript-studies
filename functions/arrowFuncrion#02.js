// o this na arrow function set interval 

function contador() {
    this.currentNumber = 0; 

    setInterval(() => {
        this.currentNumber++
        console.log(this.currentNumber)
    }, 1000)
} new contador