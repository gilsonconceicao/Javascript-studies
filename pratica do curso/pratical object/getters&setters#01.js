// Aula do youtube 

let _v = 0

let obj1 = {
    get v() {
        return 'Value: ' + _v; 
    }, 
    set v(value) {
        _v = value * 2
    }
}

obj1.v = 15
console.log(obj1.v)