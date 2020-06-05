// 1. Set up div to contain To do
// 2. Set up filters (searchtext) and wire up a new filter input to change it
// 3. Create a render-To-Do function to render and rerender the latest filter data
// Include how many to do left 
// All rendered data

const arrayOfIncompleteToDos = [];
const toDos = [{
    'title': 'Get a Coding job',
    'completed': true
}, {
    'title': 'Finish Udemy course',
    'completed': false
}, {
    'title': 'Get a Girlfriend',
    'completed': true
}, {
    'title': 'Save up 3 months living cost',
    'completed': false
}]

function renderAll() {
    allnotes();
    incompleteToDos();
    console.log('incomplete Todos:', incompleteToDos());
    printIncompleteToDo();
}


const allnotes = function () {
    toDos.forEach(function (notes) {
        const note = document.createElement('p')
        note.textContent = notes.title
        document.querySelector('#toDoList').appendChild(note)
        console.log('>> All notes', note)
    })
}

function incompleteToDos() {
    toDos.forEach(function (todo) {
        if (todo.completed === false) {
            console.log('incomplete Todos:', todo);
            arrayOfIncompleteToDos.push(todo);
            return todo;
        }
    })
    // document.querySelector('h2').textContent= `You have ${incompleteToDo.} `
}


function printIncompleteToDo() {
    const ICTD = document.createElement('p')
    ICTD.textContent = `You have ${arrayOfIncompleteToDos.length} incomplete tasks`
    document.querySelector('.incomplete-todo').appendChild(ICTD);
}

document.querySelector('#textInput').addEventListener('input', function (e) {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

renderAll()