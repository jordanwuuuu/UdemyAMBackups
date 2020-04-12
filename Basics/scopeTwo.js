
let name = 'Bruce'

if (true) {
    let name = 'Dick';
    //you can define a let variable twice in different scopes
    if (true) {
        name = 'Damian'
        //'Dick' is changed as it seraches the parent first before going up a level
       name2 = 'Jason'
       //name2 isn't defined and cannot be found so it is made into a global variable
       //can fix this if we just define it
        console.log(name)
        console.log(name2)
    }
}


if (true) {
console.log("name 2:"+name)
}