const readline = require('readline');

function studentGradeGenerator() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter student marks (between 0 and 100): ", function(marks) {
        marks = parseInt(marks);

        let grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        console.log(`For marks ${marks}, the grade is ${grade}`);

        rl.close();
    });
}

studentGradeGenerator();
