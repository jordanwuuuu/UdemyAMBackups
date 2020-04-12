let notes = [
    // {}, 
    {
        title: 'A: My next trip',
        body: 'I want to go to Japan'
    }, {
        title: 'C: things to work on',
        body: 'More code'

    }, {
        title:  'B: Office',
        body: 'Buy a new screen'

    }];

    const sortNotes = function(notes){
        notes.sort(function(a ,b){
    //if A first return -1
    //if B first return 1
    //if identical order return 0
            if(a.title.toLowerCase() < b.title.toLowerCase()){
                return -1;
            }else if(b.title.toLowerCase() < a.title.toLowerCase()){
                return 1;
            }else{
                return 0;
            }
        })
    }


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

//console.log(noteSearcher(notes, 'screen'))
//const note3 = findNote(objectNotes, 'Office');
//console.log(note3);

sortNotes(notes);
console.log(notes)



