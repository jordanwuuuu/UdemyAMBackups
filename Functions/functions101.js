//function has three parts
//-Input    -input argument
//-Code
//-Output  - return value

let greetUser = function () {
    //console.log("Welcome User");
};
greetUser();

let squared = function (num) {
    let result = num * num;
    return result;
}

let sqNum = squared(2);
//console.log(sqNum);

//=================================================
//CHALLENGE
//Convert farenheit to celsius
//call a few times
//values 32 -> 0   68 -> 20
//print converted value
//=================================================

let FtoC = function (farenheit) {
    let celsius = (farenheit - 32) / 1.8;
    return celsius;
}

let temp = FtoC(32);
let temp2 = FtoC(68);
console.log(temp + " temp2: " + temp2)

