// ""myAccount""" is a POINTER to this object
let myAccount = {
    name: 'Jordan',
    expenses: 0,
    income: 0
}


let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
    // When we pass MYACCOUNT through ADDEXPENSE, ACCOUNT becomes a pointer to this object as well

    account = {};
    //this prints "{}"
    //If we assign (=) a new value to the argument we break this binding
    //(that includes ANY argument e.g amount)
    //we can only manipulate properties
    console.log(account);
}

//^^ This is true not only for the functions

let otherAccount  = myAccount;
otherAccount.income = 1000 
//OtherAccount and myAccount are referencing the same object in memory

addExpense(myAccount, 2.5);
console.log(myAccount);
