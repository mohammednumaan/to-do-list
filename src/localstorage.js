import { DOM, displayProject } from "./DOM";
import { Project, newProjectArray } from "./createNewProject";
import { Todo } from "./createNewToDo";

function setLocalStorage(){
    
    localStorage.setItem('project', JSON.stringify(newProjectArray))

}

function getLocalStorage(){

    let data = JSON.parse(localStorage.getItem('project'))
    newProjectArray = data;
    let prjName = ''

    for (const key in data){
        let name = data[key].name
        prjName = name

    }
    console.log(prjName)
    return prjName

}


export {setLocalStorage, getLocalStorage}