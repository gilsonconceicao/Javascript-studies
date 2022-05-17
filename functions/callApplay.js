// call e applay
// Apply
function UserPerson (nome, idade) {
    return `Olá ${nome} você tem ${idade} anos. `
}

const p1 = UserPerson.apply(UserPerson, ['Junior', 17])
console.log(p1)

// ------------------- 
// call

function CreateCar (marca, modelo, color) {
    return ` Marca:${marca} Modelo: ${modelo} Cor: ${color}`
}

const carAdd = CreateCar.call(CreateCar, 'Ford', 'Mustang', 'Black'); 

console.log(carAdd)

const carAdd2 = CreateCar.call(CreateCar, 'Chevrolet', 'Prisma', 'White'); 

console.log(carAdd2)