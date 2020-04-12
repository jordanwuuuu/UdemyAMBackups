
const notes = ['Learn JS', 'Make your first app', 'Make a portfolio', 'Apply for Jobs', 'Find a job'];

notes.splice(2, 1);
notes.push('Be happier');
notes.shift();

console.log(`You have ${notes.length} items in your list `);

for (let i = 0; i < notes.length; i++) {
    console.log(`${(i + 1)}. ${notes[i]}`);

}