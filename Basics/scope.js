//JS uses lexical (static) scoping
//^^ variab;e defined in a part of the oprogram may not be avliable throught oyu program 

//GLOBAL SCOPE - defined outside of all other code blocks
//LOCAL SCOPE - defined inside a code block


//You can acccess and variables in that scope or in any parent /ancestoral scope

//Global scope (VarOne)
    //Local scope (VarTwo)
        //local Scope (VarThree)
let varOne = 'varOne';

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    //^^ This will not be defined because let has a scope of the code blocm 
    //(bits in curly braces)
    if (true) { 
        let varthree = 'VarThree'
    }

}