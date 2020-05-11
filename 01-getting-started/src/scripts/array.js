const newTodos = [
    { title: 'Buy bread', isDone: false },
    { title: 'Go to gym', isDone: false },
    { title: 'Record YouTube videos', isDone: true }
]

const findTodo = function(myTodos, title) {
    const titleReturned = myTodos.find(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go to gym')
console.log(printMe);

//Method1
// const findTodo = function(myTodos, title) {
//     const index = myTodos.findIndex(function(todo, index) {
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'Go to gym')
// console.log(printMe);