// add income function
//takes account we manipulate
//amount we're trying to add
// Reset account
//takes account we manipulate
//resets expenses and income to 0
//Get Account summary
//prints summary of account
//includes name, xpenses and income
//show in string as return value

//STEPS:
//-ADD INCOME
//-ADD EXPENSE
//-ADD EXPENSE
//-GET SUMMARY
//-RESET
//-GET SUMMARY

let myAccount = {
    name: 'Bruce Wayne',
    income: 0,
    expenses: 0
}

let addIncome = function (account, wage) {
    account.income = account.income + wage;
}
let addExpense = function (account, expense) {
    account.expenses = account.expenses + expense;
}

let reset = function (account) {
    account.income = account.income - account.income;
    account.expenses = account.expenses - account.expenses;
}

let accountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `${account.name} account. Income:${account.income}. - Expenses:${account.expenses}. You have a balance of £${balance}`;
}

//TESTs
addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 160);
console.log(accountSummary(myAccount))
reset(myAccount);
console.log(accountSummary(myAccount))