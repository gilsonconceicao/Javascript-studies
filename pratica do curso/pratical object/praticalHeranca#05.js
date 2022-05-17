// Adicionando carro

(function(){
    function AddCar (brandCar, nameCar) {
        this.brandCar = brandCar;
        this.nameCar = nameCar;
    }

    AddCar.prototype.CreateFullName = function (index) {
        console.log(index + `. ${this.brandCar} ${this.nameCar}`);
    }
   
    const car1 = new AddCar ("Honda", "Civic") ;
    car1.CreateFullName(1); 

    const car2 = new AddCar ("BMW", "X2");
    car2.CreateFullName(2)
})(); 


