const geSavedNotesData = function () {
    const notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON);
    } else {
        return [];
    }
}

// Dom structure for note
const generateNoteDOM = function (note) {
    const noteElement = document.createElement('p')
    if (note.title.length > 0) {
        noteElement.textContent = note.title;
    } else {
        note.title = 'No Title';
    }
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