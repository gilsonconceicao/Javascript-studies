// Esquema escolar com o nome da instituição.

(function() {
    function CreateStudent(nameStudent, StudentAge, raStudent, studentAverage) {
        this.nameStudent = nameStudent; 
        this.studentAge = StudentAge; 
        this.raStudent = raStudent;
        this.studentAverage = studentAverage;  
    }

    CreateStudent.prototype.ShowSchool = function (nameSchool, averageSchool=7) {
        this.averageSchool = averageSchool; 
        if (nameSchool && averageSchool) {
            console.log('NOME DA ESCOLA:', nameSchool); 
            console.log('MÉDIA DAS MATÉRIAS:',averageSchool);
        }       
    }

    CreateStudent.prototype.showStudent = function () {

        console.log(`Nome do aluno: ${this.nameStudent}`)
        console.log(`Idade: ${this.studentAge}`);
        console.log(`RA: ${this.raStudent}`);
        
        if (this.studentAverage >= this.averageSchool) {
            console.log(`Aprovado! Com a nota ${this.studentAverage} parabéns!`)
            console.log('...')
        } else {
            console.log(`Reprovado, faltou ${this.averageSchool - this.studentAverage} pontos para ser aprovado. `)
            console.log('...')
        }
    }

    const student1 = new CreateStudent('Junior', 17, '111974396-5', 7.8)
    student1.ShowSchool('E.E Maria Augusta', 7)
    student1.showStudent() 

    const student2 = new CreateStudent('Deives', 16, '9996736134-2', 3.9)
    student2.__proto__ = student1 
    student2.showStudent()

    const student3 = new CreateStudent('Ana', 18, '333621862-9', 3.9)
    student3.ShowSchool('Céu caminho do mar', 5); 
    student3.showStudent()
})()