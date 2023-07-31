import { DOM, displayProject } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";

function setLocalStorage(){
    
    localStorage.setItem('project', JSON.stringify(newProjectArray))

}

function getLocalStorage(){

    let data = JSON.parse(localStorage.getItem('project'))
    let newList = data
    let prjName = 'INBOX'

    for (let i = 0; i < newList.length; i++){
        let name = newList[i].name
        prjName = name;

    }
    return prjName

}


export {setLocalStorage, getLocalStorage}