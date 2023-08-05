// import

import { displayProject,  displayToDo } from "../main/DOM"
import { newProjectArray } from "../main/createNewProject"


// display existing projects and todos

function displayLocalStorage(){
    console.log(newProjectArray)
    let list = newProjectArray;
    for (let i = 0; i < list.length; i++){
        displayProject(list[i])

        for (let j = 0; j < list[i].todos.length; j++){
            displayToDo(list[i].todos[j], list[i])
        }  
   }
}

// export

export {displayLocalStorage}