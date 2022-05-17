// method personal
// map com herança prototipal - add values money 

const ValuesAdd = function(valueAdd) {
    this.valueAdd = valueAdd; 
}

ValuesAdd.prototype.formaterAdd = function() {
    let localNumbers = []; 

    const converterMoeda = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
    localNumbers.push(this.valueAdd); 
    console.log(localNumbers.map(converterMoeda))
}

const value1 = new ValuesAdd(100); 
value1.formaterAdd(); 

const value2 = new ValuesAdd(891); 
value2.formaterAdd()