
//Challenge 2
//Delete the 3rd item
//Add a new item onto the end
//Remove the first item

//===============
//Challenge 3
//1. first item
//2. second item

//===============


const notes = ['Learn JS', 'Make your first app', 'Make a portfolio', 'Apply for Jobs','Find a job'];

notes.splice(2,1);
notes.push('Be happier');
notes.shift();

//console.log('You have ' +notes.length+' items to do');
console.log(notes);

//===============
//Challenge 3
//1. first item
//2. second item

//===============
notes.forEach(function(item, index){
    num = index + 1;
    console.log(`${num} .${item}`);
    
});
