function toDosInLocalStorage() {
    const savedToDos = localStorage.getItem('toDos')
    if (savedToDos !== null) {
        return JSON.parse(savedToDos);
    } else {
        return [];
    }
}

function saveToDos() {
    localStorage.setItem('toDos', JSON.stringify(toDoList));
}

// render app

const renderToDos = function (toDoList, filters) {
    const filteredToDos = toDoList.filter(function (todo) {
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompleted = !filters.completed || !todo.completed;
        return searchTextMatch && hideCompleted;
    })

    const incompleteToDos = filteredToDos.filter(function (todo) {
        return !todo.completed
    });
    document.querySelector('#toDoList').innerHTML = '';
    document.querySelector('#toDoList').appendChild(generateSummaryOfIncompleteToDos(incompleteToDos));

    document.querySelector('#toDoList').innerHTML = '';
    filteredToDos.forEach(function (toDos) {
        document.querySelector('#toDoList').appendChild(createToDoDOMElements(toDos));
    })
}

// create To do DOM elements
function createToDoDOMElements(toDos) {
    const toDo = document.createElement('p')
    if (toDos.title.length > 0) {
        toDo.textContent = toDos.title
    } else {
        toDo.textContent = 'No Title'
    }
    return toDo;
}

function generateSummaryOfIncompleteToDos(incompleteToDos) {
    const summaryOfToDos = document.createElement('h2');
    summaryOfToDos.textContent = `You have ${incompleteToDos.length} incomplete tasks`;
    return summaryOfToDos;
}