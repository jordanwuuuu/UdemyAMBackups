
//undefined variable
let name ='Wu';
if(name ===undefined){

    console.log('Provide log in');
}else{

    console.log("Welcome Back Mr." + name);
}

//undefined function
let square = function(num){
    console.log(num);
} 
let result = square();
console.log(result);

// null - we use this instead of undefined. This way we can see if it was explicitly cleared by developer
let age = 23;
age = null;
console.log("Age: " +age);