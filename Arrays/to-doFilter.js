

//just show to dos that are yet to be completed.
const todo = [
    {
        text: 'Learn JS',
        completed: true
    },
    {
        text: 'Make my first app',
        completed: false
    },
    {
        text: 'Make a portfolio',
        completed: false
    },
    {
        text: 'Apply for jobs',
        completed: false
    },
    {
        text: 'Find a job',
        completed: false
    }
]


const deleteTodo = function (todo, searchword) {
    const index = todo.findIndex(function (note, index) {
        // return note.text.toLowerCase() === searchword.toLowerCase()
        return note.text.toLowerCase() === searchword.toLowerCase()
    })

    if (index > -1) {
        todo.splice(index, 1);
    }
}

const getThingsToDo = function(listOfToDo){
    return listOfToDo.filter(function(notes, index) {
    return !notes.completed
    })
}


console.log(getThingsToDo(todo))


