import { Todo } from "./createNewToDo"
import { newProjectArray } from "./createNewProject"

function editFunctionality(title,desc,date,prior,todo,project){        
    // updates the array
    
    let updatedTodo = new Todo(title.value, desc.value, date.value, prior.value,todo.project)
    let currentTodo = todo
    let index = project.todos.indexOf(currentTodo)
    project.todos.splice(index, 1, updatedTodo)
    console.log(newProjectArray)


}

export {editFunctionality}