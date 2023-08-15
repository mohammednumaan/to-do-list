// import

import { defaultProject, newProjectArray } from "../main/createNewProject";

// set local storage

function setLocalStorage(){

    localStorage.setItem('project', JSON.stringify(newProjectArray))
}


// get local storage

function getLocalStorage(){

    
    let localData = JSON.parse(localStorage.getItem('project')) || []

    if (localData === [] ){
        defaultProject()
    }

    newProjectArray = localData;
    return newProjectArray

}

// export

export {setLocalStorage, getLocalStorage}