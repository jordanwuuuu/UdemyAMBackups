const notes = [{
    title: 'Xmas gifts',
    body: 'Shop on amazon',
    completed: true
}, {
    title: 'Black Friday',
    body: 'List black friday deals',
    completed: true
}, {
    title: 'Finish JS',
    body: 'Do this coding course',
    completed: false
}]
const filters = {
    'searchText': '',
}
const user = {'name': 'Jordan', 'age': 27}
JSON.stringify(user);
const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    // document.querySelector('#notes').innerHTML = '';
    document.querySelector('#notes').textContent = '';
    filteredNotes.forEach(function (note) {
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title;
        document.querySelector('#notes').appendChild(noteElement);
    })
}

renderNotes(notes, filters);
document.querySelector('#add_note').addEventListener('click', function (event) {
    event.target.textContent = 'Add another note';
    let p = document.createElement('p');
    p.textContent = 'New note';
    p.className = 'note';
    document.querySelector('body').appendChild(p);
})



document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})
document.querySelector('#filter-By').addEventListener('change', function (e) { 
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
