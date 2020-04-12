
//1. turn array into array of objects
//Two properties:
// - text
// - Completed
//2. create a function to remove a to-do by text value
// - Case sensitive

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
        completed: true
    },
    {
        text: 'Apply for jobs',
        completed: true
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

deleteTodo(todo, 'find a job')
console.log(todo)


