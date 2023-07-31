import { newProjectArray } from "../createNewProject"

function deleteTasks(e, project, div,todo){
    project.removeTask(todo.title)
    div.removeChild(e.target.parentElement)
    console.log(newProjectArray)
}

export {deleteTasks}