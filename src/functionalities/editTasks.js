// import

import { Todo } from "../main/createNewToDo"

// edit logic

function editFunctionality(title,desc,date,prior,todo,project){        

    let updatedTodo = new Todo(title, desc, date, prior, todo.project)
    let currentTodo = todo
    let index = project.todos.indexOf(currentTodo)
    project.todos.splice(index, 1, updatedTodo)

}

// export

export {editFunctionality}