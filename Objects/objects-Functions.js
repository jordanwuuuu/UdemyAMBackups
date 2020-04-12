let myBook = {
    title: 'YOU DIED',
    author: 'Some neek ass loser',
    pagecount: 230
}

let myBook2 = {
    title: '1984',
    author: 'George Orwell',
    pagecount: 394
}
//returns an object
let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `Is ${book.pagecount} pages long`
    }
}

let bookSummary = getSummary(myBook2)

console.log(bookSummary);
//dot notation returns part of the object
console.log(bookSummary.summary);




