//CHALLENGE
//Takes 2 argument
// Total for bill
//percetage you want to take

//Defalt tip is 20% in decimal so .2
//print

//============================================================

let tipCalculator = function (total, tip = 0.2) {

    return total * (tip / 10)
}

//console.log("Tip: " + tipCalculator(100, 2));

//============================================================
//CHALLENGE 2 Templates
//use template strings
// __ tip on ___ dollars in

let tipCalculatorT = function (total, tipPercent = 0.2) {
    let tip = total * (tipPercent / 100)
    return `You owe £${tip} tip from your £${total} bill. Thats ${tipPercent}% tip `
}

let tip = tipCalculatorT(60, 20)
console.log(tip);
