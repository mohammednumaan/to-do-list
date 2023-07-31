import { DOM } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";

function setLocalStorage(){
    localStorage.setItem('project', JSON.stringify(newProjectArray))
}


export {setLocalStorage}