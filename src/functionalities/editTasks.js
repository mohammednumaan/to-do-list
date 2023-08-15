// import

import { setLocalStorage } from "../localstorage/localStorage"
import { Todo } from "../main/createNewToDo"


// edit logic

function editFunctionality(title,desc,date,prior,todo,project){        

    let updatedTodo =  new Todo(title,desc,date,prior,project.name)
    let currentTodo = todo
    let index = project.todos.indexOf(currentTodo)
    
    project.todos.splice(index, 1, updatedTodo)
    updatedTodo.completed = currentTodo.completed
    updatedTodo.generateTodoId(project)
    setLocalStorage()
    return updatedTodo;
}



// export

export {editFunctionality}