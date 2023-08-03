import { Todo } from "../main/createNewToDo"
import { newProjectArray } from "../main/createNewProject"

function editFunctionality(title,desc,date,prior,todo,project){        
    // updates the array
    console.log(todo)
    console.log(project)
    let updatedTodo = new Todo(title, desc, date, prior, todo.project)
    let currentTodo = todo
    let index = project.todos.indexOf(currentTodo)
    project.todos.splice(index, 1, updatedTodo)
    console.log(newProjectArray)


}

export {editFunctionality}