// import

import { newProjectArray } from "../main/createNewProject";
import { Todo } from "../main/createNewToDo";
import { setLocalStorage } from "../localstorage/localStorage";

// generate todo

function todoObject(title, desc, date, prior, name){

    let newTodo;
    for (let i = 0; i < newProjectArray.length; i++){
    
        if ('title' in name.todos){

            newTodo = new Todo(title, desc,date, prior, name.name,name.todos)
            newTodo.generateTodoId(name)
            setLocalStorage()

        }
        else{

            newTodo = new Todo(title, desc,date, prior, name.name)
            name.todos.push(newTodo)
            newTodo.generateTodoId(name)
            setLocalStorage()

        }
        return newTodo; 
    }
}

// export

export {todoObject}