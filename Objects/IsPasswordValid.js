//create function that:
//Takes password
//return true is length is more than 8 and hasn't got 'password'
//else false

let isValidPassword = function (password) {
    // if (password.length > 8 && !password.includes('password')) {
    //     return true;
    // } else {
    //     return false;
    // }

    return password.length > 8 && !password.includes('password')
}


//tests
console.log(isValidPassword('asdaf')); //true
console.log(isValidPassword('abc1234aasjdadadaf'));
console.log(isValidPassword('123longlongpassword'));
