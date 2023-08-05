// import

import { getLocalStorage, setLocalStorage } from "../localstorage/localStorage";
import { Todo } from "./createNewToDo";

// project object constructor

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

// stores all te projects in an array

let newProjectArray = [];

// default inbox/project

function defaultProject(){
    let defaultProject = new Project('INBOX')
    let defaultTodo = new Todo('Welcome!', 'Hello There!', '01-01-2023', 'Low', 'INBOX')
    defaultProject.todos.push(defaultTodo)
    newProjectArray.unshift(defaultProject)
    setLocalStorage()
    return newProjectArray;
}


// export

export {Project, defaultProject, newProjectArray}