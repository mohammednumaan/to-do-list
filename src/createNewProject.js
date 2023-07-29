// creates project object

class Project{
    constructor(name){
        this.name = name
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