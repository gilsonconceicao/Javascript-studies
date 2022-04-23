//IIFE - Immediately Imvoked Function Expression 
// é autoinvocada no momento na qul és executada. 

(function() {
    const ramdomNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    console.log('Menor valor aleatório:',Math.min.apply( Math, ramdomNumbers)); 
    console.log('Maior valor aleatório:',Math.max.apply( Math, ramdomNumbers))
})()