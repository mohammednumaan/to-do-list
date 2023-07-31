// creates project object

import { setLocalStorage } from "./localstorage";

class Project{
    constructor(name){
        this.name = name
        this.todos = []
    }

    addTask(task){
        this.todos.push(task)
        setLocalStorage()
    }

    removeTask(task){
        this.todos = this.todos.filter((todo) => todo.title !== task);
        setLocalStorage()
    }


}

// stores all the projects and creates default project

let defaultProject = new Project('DEFAULT')
let newProjectArray = []


// export

export {Project, defaultProject, newProjectArray}