class Project{
    constructor(name, selected){
        this.name = name
        this.selected = selected
        this.todos = []
    }

    addTask(task){
        this.todos.push(task)
    }

    removeTask(task){
        let index = this.todos.indexOf(task)
        this.todos.splice(index, 1)
    }
}

let newProjectArray = []
export {Project, newProjectArray}