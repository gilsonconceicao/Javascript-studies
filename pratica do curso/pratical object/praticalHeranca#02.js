// app com herança || program detran

(function() {
    function DetranProgram () {}; 
    DetranProgram.prototype.nameOwner = 'Name owner'
    DetranProgram.prototype.nameCar = 'Car name'
    DetranProgram.prototype.placa = 'placa car'
    
    DetranProgram.prototype.checkedSpeed = function (currentSpeed) {
        let velMax = 180; 
        const calcVel = currentSpeed - velMax; 
        if (currentSpeed <= velMax) {
            console.log(`Carro ${this.nameCar} de ${velMax}Km/h está ${currentSpeed}Km/h. O dono(a) ${this.nameOwner}, está correto(a)!`)
        } else {
            console.log(`Carro ${this.nameCar} de ${velMax}Km/h está ${currentSpeed}Km/h, passou ${calcVel.toFixed(0)}Km/h. Placa do carro ${this.placa} `)
        }   
    }

    const car1 = new DetranProgram

    car1.nameOwner = 'Hariel'; 
    car1.nameCar = 'Volvo'; 
    car1.placa = 'BSE4R51';
    car1.checkedSpeed(200);
    
    const car2 = new DetranProgram

    car2.nameOwner = 'Ana'; 
    car2.nameCar = 'BMW x2'; 
    car2.placa = 'CAJ6S59'; 
    car2.checkedSpeed(100);

})()