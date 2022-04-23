// getters e setters

let numberAdd = 0

const obj01 = {
    get addnumber() {
        return numberAdd
    }, 
    set addnumber(value) {
        numberAdd = value * 2
    }
}

obj01.addnumber = 15

console.log(obj01.addnumber)