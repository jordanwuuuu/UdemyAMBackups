let isAccountLocked = true;
let userRole = 'admin'

// if (isAccountLocked) {
//     console.log('Account is locked');
// } else if (userRole == 'admin') {
//     console.log('Welcome Admin');
// } else {
//     console.log('Welcome');
// }

// else if only runs if 'if' isn't true, and else only runs if 'else if' isn't true

//========================================
//CHALLENGE

//ONE OF THREE SCENARIOS
//Its too cold outside - 31
//Its okay outside - 45
//Its too hot outside - 120

let temp = 40;

if (temp <= 32) {
    console.log("It's too cold outside")
} else if (temp >= 110) {
    console.log("Its hot outside")
} else {
console.log("It's ok outside")
}
