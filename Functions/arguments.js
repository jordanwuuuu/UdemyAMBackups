
//multiple arguments
let add = function (S1, S2, S3) {

    return S1+S2+S3;
}

console.log(add('hello ', 'World ', 'Lol '));
console.log(add(3,3,3));

//Defailt arguments

//deafult is now 0
let getScoreText = function(name = 'Anonymous', score = 0){
return `Name: ${name}. Score is: ${score}`;
}

let scoreText = getScoreText('Jordan', 69);
let scoreText2 = getScoreText('Bruce');
let scoreText3 = getScoreText(undefined, 99);

console.log(scoreText);
console.log(scoreText2);
console.log(scoreText3);

//this is  a TEMPLATE quote
// ${} is for your string
//this is easier to read and easier to change

