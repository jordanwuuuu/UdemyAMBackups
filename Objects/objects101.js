//OBJECTS
//We use objects to store pieces of information that are related in a single place

let book = { 
title: 'YOU DIED',
author: 'Some neek ass loser',
pagecount: 230
}

//this is DOT NOTATION
console.log(`The title is ${book.title}, by ${book.author}. It has about ${book.pagecount} pages`);

book.title = 'YOU DIED 2'
console.log(`The title is ${book.title}, by ${book.author}. It has about ${book.pagecount} pages`);

//=================================================
//CHALLENGE
//print a person
//include:
//Name, Age, Location
//Then increase age by 1

let person = {
    Name: 'Bruce Wayne',
    Age: 27,
    Location: 'Gotham City'
}

console.log(`${person.Name} is ${person.Age} years old. He lives in ${person.Location}.`)

person.Name = person.Name + ' AKA The Batman';

console.log(`${person.Name} is ${person.Age} years old. He lives in ${person.Location}.`)

