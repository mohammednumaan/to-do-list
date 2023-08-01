import { DOM, displayProject } from "./DOM";
import { getLocalStorage, loadTasks, setLocalStorage } from "./localstorage";
import { newProjectArray, setProjects} from "./createNewProject"
import { prjName } from "./localstorage";


//setProjects(getLocalStorage())

getLocalStorage()
window.addEventListener('load', () => {
    getLocalStorage()
})

console.log(getLocalStorage())

DOM()



