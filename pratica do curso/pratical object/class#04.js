// create person 

class PersonProgrammer {
    constructor(firstName, lastName) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.programmer = true
    }

    userData () {
        console.log(`Nome: ${this.firstName +" "+ this.lastName}`)
        console.log(`É programdor: ${this.programmer ? "Sim!" : "Não!"}`)
    }

    programmerYes () {
        this.programmer = true
    }

    programmerNo () {
        this.programmer = false
    }

    // checked programmes extends
}

class DeveloperUser extends PersonProgrammer {
    constructor (firstName, lastName, ) {
        super (firstName, lastName); 
    }

    set programmerLanguage (language) {
        if (language == 1 ) {
            console.log(`Linguagem de dóminio: JAVASCRIPT`)
        } else if (language == 2) {
            console.log(`Linguagem de dóminio: PHP`)
        } else if (language == 3) { 
            console.log(`Linguagem de dóminio: SQL`)
        }
        console.log()
    } 
}

class workingDeveloper extends DeveloperUser {
    constructor(firstName, lastName, workingDev) {
        super(firstName, lastName)
        this.workingDev = workingDev
    }

    getWorkDev () {
        console.log(`${this.firstName} está ${this.workingDev ? "trabalhando": "desempregado"}`)
    } 
}


const person01 = new workingDeveloper("Junior", "Santos", true)
person01.userData()
person01.programmerYes()
person01.programmerLanguage = 1 
person01.getWorkDev()

console.log('____________________')


const person02 = new workingDeveloper("Jorge", "Silva", false)
person02.userData()
person02.programmerNo()
person02.programmerLanguage = 3
person02.getWorkDev()


