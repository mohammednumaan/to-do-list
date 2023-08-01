import { displayProject, displayToDo, mainContainer} from "./DOM"
import { newProjectArray } from "./createNewProject"

function displayLocalStorage(){
    for (let i = 0; i < newProjectArray.length; i++){
        displayProject(newProjectArray[i].name)

        
        


        
   }
}

export {displayLocalStorage}