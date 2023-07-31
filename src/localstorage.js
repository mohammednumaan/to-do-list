import { DOM, displayProject } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";

function setLocalStorage(){
    
    localStorage.setItem('project', JSON.stringify(newProjectArray))

}

function getLocalStorage(){

    let data = JSON.parse(localStorage.getItem('project'))
    let newList = data;
    let prjName = ''

    for (const key in newList){
        let name = newList[key].name
        prjName = name

    }
    return prjName

}





export {setLocalStorage, getLocalStorage}