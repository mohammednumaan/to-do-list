function deleteTasks(target, project, div,todo){
    project.removeTask(todo.title)
    div.removeChild(target.target.parentElement)

}

export {deleteTasks}