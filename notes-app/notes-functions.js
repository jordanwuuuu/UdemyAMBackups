const geSavedNotesData = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

const removeNote= function(id) {
    const noteIndex = notes.findIndex()
}

// Dom structure for note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('div');
    const textElement = document.createElement('span');
    const button = document.createElement('button');


    button.textContent = 'X';
    noteElement.appendChild(button);
    button.addEventListener('click', () => {
        console.log(`Removing note:`, note);
        renderNotes(notes, filters)
    })

    if (note.title.length > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = 'No Title';
    }

    noteElement.appendChild(textElement);

    return noteElement;
}

// Render application

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    document.querySelector('#notes').innerHTML = '';
    filteredNotes.forEach(function (note) {
        const noteElement = generateNoteDOM(note);
        document.querySelector('#notes').appendChild(noteElement);
    })
}

