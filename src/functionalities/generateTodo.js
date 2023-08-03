// import

import { newProjectArray } from "../main/createNewProject";
import { Todo } from "../main/createNewToDo";
import { setLocalStorage } from "../localstorage/localStorage";

// generate todo

function todoObject(title, desc, date, prior, name){

    let newTodo;
    for (let i = 0; i < newProjectArray.length; i++){
    
        if ('title' in name.todos){
            console.log('not-push')
            newTodo = new Todo(title, desc,date, prior, name.name)
            setLocalStorage()
            console.log(name)
        }
        else{
            console.log('push')
            newTodo = new Todo(title, desc,date, prior, name.name)
            name.todos.push(newTodo)
            setLocalStorage()
            console.log(name)
        }
        return newTodo; 
    }
}

// export

export {todoObject}