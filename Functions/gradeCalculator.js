//CHALLENGE

//Must include:
//Student score
//Total Highest Score
//e.g 15/20  -> You got a C (75%)
//Return this string^^ 

//GRADES
//A - 90-100
//B - 80-89
//C - 70-79
//D - 60-69
//E - 50-59
//F - 0-49

//print string to screen

const gradeCalculator = function (studentScore, totalScore) {
    const percentage = (studentScore / totalScore) * 100;
    let result;
    if (percentage <= 49) {
        result = 'F';
    } else if (percentage <= 59) {
        result = 'E';
    } else if (percentage <= 68) {
        result = 'D';
    } else if (percentage == 69) {
        result = 'Noice';
    } else if (percentage <= 79) {
        result = 'C';
    } else if (percentage <= 89) {
        result = 'B';
    } else if (percentage <= 100) {
        result = 'A';
    }
    else {
        result = 'Cheater'
    }

    return `You got a ${result} (${percentage}) out of ${totalScore}`;


}

console.log(gradeCalculator(70, 100))

