function deleteTasks(e, project, div,todo){
    project.removeTask(todo.title)
    div.removeChild(e.target.parentElement)

}

export {deleteTasks}