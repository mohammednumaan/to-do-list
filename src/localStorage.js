import { DOM, displayProject } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";


function setLocalStorage(){
    
    localStorage.setItem('project', JSON.stringify(newProjectArray))
    localStorage.setItem('todo', JSON.stringify(newProjectArray))
  
    

}

function getLocalStorage(){

    let localData = JSON.parse(localStorage.getItem('project')) || []
    console.log(localData)
    newProjectArray = localData;
    return newProjectArray

}




export {setLocalStorage, getLocalStorage}