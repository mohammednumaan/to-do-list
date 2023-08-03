// import

import { setLocalStorage } from "../localstorage/localStorage";
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

let defaultProject = new Project('INBOX')


// export

export {Project, defaultProject, newProjectArray}