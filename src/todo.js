import { newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";
import { displayToDo } from "./DOM";
import { setLocalStorage } from "./localStorage";

function todoObject(title, desc, date, prior, name){

    let newTodo;
    for (let i = 0; i < newProjectArray.length; i++){
        console.log(i)
    
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



export {todoObject}