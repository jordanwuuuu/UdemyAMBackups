const notes = geSavedNotesData();

const filters = {
    'searchText': '',
}

renderNotes(notes, filters);

document.querySelector('#add_note').addEventListener('click', function (event) {
    event.target.textContent = 'Add another note';
    notes.push({
        'id': uuidv4(),
        'title': '',
        'body': '',
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    renderNotes(notes, filters);
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log('filter value:', e.target.value);
});



// ---- REMOVE ALL NOTES BUTTON --//
// document.querySelector('#remove_all_notes').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note) {
//         note.remove();
//     })
// })

// ---- REMOVE LAST NOTE BUTTON --//
// document.querySelector('#remove_last_note').addEventListener('click', function () {
//     document.querySelectorAll('.note').forEach(function (note, index, array) {
//         if (index === array.length - 1) {
//             note.remove()
//         }
//     })
// })
