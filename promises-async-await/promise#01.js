let bestProgrammer = 'Mark Zuckerberg'; 

function awordeProgrammer(name) {
    bestProgrammer = name; 
    return new Promise((resolve, reject ) => {
        if (bestProgrammer == 'Mark Zuckerberg' || bestProgrammer == 'Bill Gates') {
            resolve(`is this best programmer: ${bestProgrammer}`); 
        } else {
            reject(`is this not the best programmer: ${bestProgrammer}`);
        }
    })
}

awordeProgrammer('Bill Gates')
    .then(console.log)
    .catch(console.log)