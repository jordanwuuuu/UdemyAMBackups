let notes = ['notes 1', 'notes 2', 'notes 3']

//foreach only takes a function
notes.forEach(function(item, index){
    console.log(item);
    console.log(index)

});



console.log(notes.length);
console.log(notes);

//counting to 1000
// for(let count =0; count<=1000; count++){
// console.log(count);
// }

for(let i=0; i<notes.length;i++){
    console.log(notes[i]);
    console.log(i);
}