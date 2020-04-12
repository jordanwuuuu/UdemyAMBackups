let notes = [
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

    }];

const findNote = function (notes, noteTitle) {

    //This returns the actual match not the index (unlike above)
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
        //returns true if they are the same in lowercase
    })
};

const noteSearcher = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch;
    })
}

console.log(noteSearcher(notes, 'screen'))
//const note3 = findNote(objectNotes, 'Office');
//console.log(note3);





