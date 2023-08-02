import { displayProject,  mainContainer} from "./DOM"
import { newProjectArray } from "./createNewProject"
import { setLocalStorage } from "./localStorage"
import { Project } from "./createNewProject"


function displayLocalStorage(){

    for (let i = 0; i < newProjectArray.length; i++){
        displayProject(newProjectArray[i])

        console.log(newProjectArray[i].todos[i].title)

        


        
   }
}

export {displayLocalStorage}