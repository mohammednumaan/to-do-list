import { newProjectArray } from "./createNewProject"

function deleteTasks(e, project, div){
    project.removeTask(newTodo.title)
    div.removeChild(e.target.parentElement)
    console.log(newProjectArray)
}

export {deleteTasks}