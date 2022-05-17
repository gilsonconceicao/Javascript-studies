class CreateCar {
    constructor (index, brandCar, modelCar) {
        this.index = index
        this.brandCar = brandCar; 
        this.modelCar = modelCar; 
        this.fuelComb = 10; 
        
    }   
    
    fullNameCar () {
        let numberIndice = 0
        console.log(`Carro: ${numberIndice+this.index}`)
        console.log(`Marca------: ${this.brandCar}`); 
        console.log(`Carro------: ${this.modelCar} `); 
        console.log(`Combustível: ${this.fuelComb}`); 
        
    }

    set getFuelCombs (valueCombs) {
        
        if (valueCombs <= 0 || valueCombs > 100) {
            console.log(`Valor de ${valueCombs} é inválido.`)
        } else {
            this.fuelComb = valueCombs
            console.log("Valor do combustível alterado com sucesso!")
        }
    }
}

class CarOnOf extends CreateCar {
    constructor (index, brandCar, modelCar) {
        super(index, brandCar, modelCar);
        this.ofAndOnCar = false 
    }

    checkedCar () {
        super.fullNameCar()
        console.log(`Ligado?----: ${this.ofAndOnCar ? "Sim, ligado!" : "Desligado"}`)
        console.log("----------------------")
    }

    get carOn () {
        this.ofAndOnCar = true
    }

    get carOff () {
        this.ofAndOnCar = false
    }

}

const c1 = new CarOnOf(1, "BMW", "x6"); 
c1.getFuelCombs = 50
c1.carOff 
c1.checkedCar()

const c2 = new CarOnOf(2, "Mercedes", "A200"); 
c2.getFuelCombs = 80 
c2.carOn 
c2.checkedCar()