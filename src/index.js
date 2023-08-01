import { DOM, displayProject } from "./DOM";
import { getLocalStorage, loadTasks, setLocalStorage } from "./localstorage";
import { newProjectArray, setProjects} from "./createNewProject"
import { displayToDo } from "./DOM";
import { displayLocalStorage } from "./displayLocalStorage";



//setProjects(getLocalStorage())

getLocalStorage()
window.addEventListener('load', () => {
    getLocalStorage()
})

console.log(getLocalStorage())


displayLocalStorage()


DOM()



