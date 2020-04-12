let num = 123.456;
//console.log(num.toFixed(2));    //customise decimal place
//console.log(Math.round(num));
//console.log(Math.floor(num)); //Rounds down
//console.log(Math.ceil(num)); //rounds up

let min = 1;
let max = 5;
let randomNum = Math.floor(Math.random() * (max-min+1)) + min; //generates a random numer between 2 numbers
//Math.random produces number between 0 to 0.999
// max - min + 1 = 11
//so a random number between 0-0.99 when mutiplied equals
//a number between 0 -10.99
//math.floor brings it down so it equal min not 10.999 but 10
//we want between 10 -20 so we add 'min'

//console.log(randomNum);


//Challenge:
//create a function.
//takes in persons guess
//Generates a random number
// figure out if guesss is correct
//Range: 1 -5

let makeGuess = function(guess){
let newRandomNumber = Math.floor(Math.random() * (max-min+1))+ min;

// if(guess == newRandomNumber){
//     return true;
// }else{
// return false;
// }

return guess ===newRandomNumber;

}


console.log(makeGuess(1));
