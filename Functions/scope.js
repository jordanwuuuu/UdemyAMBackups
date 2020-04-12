//Global scope  (FtoC, temp, temp2)
    //local Scope (fahrenheit, celsius)
        //local scope (isFreezing)

let FtoC = function (fahrenheit) {
    let celsius = (fahrenheit - 32) / 1.8;

    if(celsius <= 0){
        let isFreezing = true;
    }
    return celsius;
}

let temp = FtoC(32);
let temp2 = FtoC(68);
console.log(temp + " temp2: " + temp2)