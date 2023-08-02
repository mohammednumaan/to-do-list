import { displayProject, displayToDo, mainContainer} from "./DOM"
import { newProjectArray } from "./createNewProject"
import { setLocalStorage } from "./localStorage"

function displayLocalStorage(){
    for (let i = 0; i < newProjectArray.length; i++){
      
        displayProject(newProjectArray[i])
        
        setLocalStorage()

        
   }
}

export {displayLocalStorage}