import { displayProject,  displayToDo,  mainContainer, projectDiv} from "./DOM"
import { newProjectArray } from "./createNewProject"
import { setLocalStorage } from "./localStorage"
import { Project } from "./createNewProject"
import { todoObject } from "./todo"


function displayLocalStorage(){

    let list = newProjectArray
    for (let i = 0; i < list.length; i++){
        displayProject(list[i])

        for (let j = 0; j < list[i].todos.length; j++){
            displayToDo(list[i].todos[j], list[i], projectDiv)
         

        }


        


        
   }
}

export {displayLocalStorage}