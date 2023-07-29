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

// stores all the projects and creates default project

let defaultProject = new Project('DEFAULT')
let newProjectArray = []

// export

export {Project, defaultProject, newProjectArray}