function sumNumbers(min, max, tempo) {
    const randamNumbers = parseInt(Math.random() * (max - min)) + min; 
    return new Promise((resolve) => {
        resolve(randamNumbers)
    }, tempo)
}

function checkedExecSums() {
    return Promise.all([
        sumNumbers(1, 20, 2000), 
        sumNumbers(1, 20, 3000),
        sumNumbers(1, 20, 4000), 
        sumNumbers(1, 20, 3000)
    ])
}

checkedExecSums()
    .then(console.log); 