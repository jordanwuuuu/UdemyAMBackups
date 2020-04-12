let notes = ['notes 1', 'notes 2', 'notes 3']
let objectNotes = [
   // {}, 
    {
    title: 'My next trip',
    body: 'I want to go to Japan'
}, {
    title: 'things to work on',
    body: 'More code'

}, {
    title: 'Office',
    body: 'Buy a new screen'

}];    //contains objects


// for (let i = 0; i < notes.length; i++) {
//     //  console.log(notes[i]);
//     // console.log(i);
// }
//console.log(notes.indexOf('notes 2'));
//returns a number, it returns the position of this item in the array
//-1 comes back if it can't find it


// console.log(objectNotes)
// console.log(objectNotes.length)
// console.log(objectNotes.indexOf());


// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// };



// const index = objectNotes.findIndex(function(note, index){
//     console.log(note)
//     return note.title === 'Office';
// });


// console.log(index);
//A lot like foreach
//called one time for each item in the array
//Once the search finds the result it stops searching

const findNote = function (notes, noteTitle) {

    //This returns the actual match not the index (unlike above)
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
        //returns true if they are the same in lowercase
    })
};



const note3 = findNote(objectNotes,'OFfice');
console.log(note3);





