//Sort the to-do be completed. uncompleted comes first

const todo = [
    {
        text: 'Learn JS',
        completed: true
    },
    {
        text: 'Make my first app',
        completed: true
    },
    {
        text: 'Make a portfolio',
        completed: true
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

//true = 1

const sortToDos = function(notes){
    notes.sort(function(a,b){
        if( !a.completed  && b.completed){
            return -1
        } else if(!b.completed && a.completed){
            return 1
        }else {
            return 0
        }
    })
}

sortToDos(todo)
console.log(todo)