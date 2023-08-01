import { DOM, displayProject } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";


function setLocalStorage(){
    
    localStorage.setItem('project', JSON.stringify(newProjectArray))

}

function getLocalStorage(){

    let localData = localStorage.getItem('project')
    let parsedData = JSON.parse(localData) || []
    newProjectArray = parsedData;
    return newProjectArray

}



export {setLocalStorage, getLocalStorage}