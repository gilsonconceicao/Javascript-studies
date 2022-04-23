// funções com herança || App Notas de alunos

(function () {
    function StudentGrades () {}
    const student1 = new StudentGrades
    
    StudentGrades.prototype.nameStudent = 'Student';

    StudentGrades.prototype.checkNote = function(noteStudent) {
        const averageNote = 7; 
        const necessaryNote = averageNote - noteStudent; 
        if (averageNote <= noteStudent) {
            console.log(`Aprovado! ${this.nameStudent} a sua nota foi ${noteStudent} parabéns!`); 
        } else {
            console.log(`Ops, ${this.nameStudent}, você foi reprovado. Faltou ${necessaryNote.toFixed(2)} de nota. A média é ${averageNote}`)
        }
    }

    student1.nameStudent = 'Junior'; 
    student1.checkNote(8.1)

    const student2 = new StudentGrades

    student2.nameStudent = 'Filipe'; 
    student2.checkNote(5.7)

    const student3 = new StudentGrades

    student3.nameStudent = 'Deives'; 
    student3.checkNote(8.9)
})()