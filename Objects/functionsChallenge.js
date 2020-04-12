//Temperature converter
//Create a object that contains all 3 temperatures
//create a function
//take in fahrenheit
//return object with all 3. so converted celsius and kelvin AND fahrenheit




let tempConverter = function (fahrenheit) {
   return temp = {
        fahrenheit: fahrenheit,
        celsius: (fahrenheit - 32) / 1.8,
        kelvin: (fahrenheit + 459.67) * (5 / 9)
    }
}
let allTemps = tempConverter(32)
console.log(allTemps);

