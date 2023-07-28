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

        this.todos = this.todos.filter((todo) => todo.title !== task);
    }
}

let newProjectArray = []
export {Project, newProjectArray}