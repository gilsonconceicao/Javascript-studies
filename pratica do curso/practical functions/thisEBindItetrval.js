// this e bind com interval 

function contador() {
    this.currentNumber = 0; 

    setInterval(()=> {
        this.currentNumber++; 
        console.log(this.currentNumber); 
    }, 1000)
}
new contador