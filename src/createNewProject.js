// creates project object

import { getLocalStorage, setLocalStorage } from "./localstorage";

class Project{
    constructor(name){
        this.name = name
        this.todos = []
    }

    addTask(task){
        this.todos.push(task)
        setLocalStorage()
        getLocalStorage()
    }

    removeTask(task){
        this.todos = this.todos.filter((todo) => todo.title !== task);
        setLocalStorage()
        getLocalStorage()
    }


}

// stores all the projects and creates default project

let defaultProject = new Project('DEFAULT')
let newProjectArray = []

function setProjects(projects){
    newProjectArray = projects;
    return newProjectArray
}


// export

export {Project, defaultProject, newProjectArray, setProjects}