import { DOM, displayProject } from "./DOM";
import { getLocalStorage, loadTasks, setLocalStorage } from "./localstorage";
import { newProjectArray} from "./createNewProject";


//setProjects(getLocalStorage())
getLocalStorage()
displayProject(getLocalStorage())
window.onload = getLocalStorage;

DOM()


