// 1. Set up div to contain To do
// 2. Set up filters (searchtext) and wire up a new filter input to change it
// 3. Create a render-To-Do function to render and rerender the latest filter data
// Include how many to do left 
// All rendered data

const arrayOfIncompleteToDos = [];
const toDosList = [{
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
const filters = {
    searchText: '',
};

const renderToDos = function (toDosList, filters) {
    const filteredToDos = toDosList.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    const incompleteToDos = filteredToDos.filter(function (todo) {
        return !todo.completed
    }); 
    document.querySelector('#toDoList').innerHTML = '';

    const summaryOfTodos = document.createElement('h2')
    summaryOfTodos.textContent = `You have ${incompleteToDos.length} incomplete tasks`;
    document.querySelector('#toDoList').appendChild(summaryOfTodos);

    filteredToDos.forEach(function (todos) {
        const toDo = document.createElement('p')
        toDo.textContent = todos.title
        document.querySelector('#toDoList').appendChild(toDo)
    })
}

renderToDos(toDosList, filters);

document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    console.log('>> Search text:', filters.searchText);
    renderToDos(toDosList, filters)
})

// function renderAll() {
//     allnotes();
//     incompleteToDos();
//     printIncompleteToDo();
// }


// function printIncompleteToDo() {
//     document.querySelector('.incomplete-todo').appendChild(ICTD);
// }

// document.querySelector('#textInput').addEventListener('input', function (e) {
//     filters.searchText = e.target.value;
//  //   renderNotes(notes, filters);
// })

// renderAll()