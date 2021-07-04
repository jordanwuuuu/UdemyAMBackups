const toDoList = toDosInLocalStorage();

const filters = {
    searchText: '',
    hideCompleted: false,
};

renderToDos(toDoList, filters);

document.querySelector('#addNewToDoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const value = event.target.elements.newToDo.value;
    const newItem = {
        'id': uuidv4(),
        'title': value,
        'completed': false
    };
    toDoList.push(newItem);
    saveToDos();
    renderToDos(toDoList, filters)
    event.target.elements.newToDo.value = '';
})

document.querySelector('#search-text').addEventListener('input', function (event) {
    filters.searchText = event.target.value;
    renderToDos(toDoList, filters)
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderToDos(toDoList, filters)
})