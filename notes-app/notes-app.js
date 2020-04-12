const notes=[{
    title: 'Xmas gifts',
    body: 'Shop on amazon'
},{
    title: 'Black Friday',
    body: 'List black friday deals'
},{
    title: 'Finish JS',
    body: 'Do this coding course'
}]

document.querySelector('#add_note').addEventListener('click', function (event) {
    event.target.textContent= 'button clicked'
    
    let p = document.createElement('p')
    p.textContent = 'New note'
    document.querySelector('.note').appendChild(p)
})

document.querySelector('#remove_all_notes').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach( function (note) {
        note.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
console.log(e.target.value)
 })