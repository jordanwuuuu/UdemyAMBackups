//challenge 1/2

//Arrays of objects
///model expense using an object

//Expense:
//Description [string]
//Amount [int]
//Methods:
//Add Expense   ->takes in description and amount add to object and add to list
//Account Summary-> totals up all expenses + note "I Have £___ in expenses"

const account = {
    name: 'Jordan Wu',
    expense:[],
    
    addExpense: function (description, amount) {
        newExpense = {
            description: description,
            amount: amount
        }
    this.expense.push(newExpense)
    },
    getAccountSummary: function () {
        let total = this.expense.forEach(function(item, index){
           

           return this.expense + newExpense.amount
       })

        return `${this.name}'s account has ${total}`
    }
}

account.addExpense('rent', 950)
account.addExpense('Coffee', 2)
console.log(account.getAccountSummary())
//console.log(account.expense)
