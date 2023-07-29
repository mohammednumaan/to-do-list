function deleteTasks(e){
    newProject.removeTask(newTodo.title)
    projectDiv.removeChild(e.target.parentElement)
    console.log(newProjectArray)
}

export {deleteTasks}