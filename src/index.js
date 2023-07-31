import { DOM } from "./DOM";
import { getLocalStorage, loadTasks } from "./localstorage";
import { newProjectArray, setProjects } from "./createNewProject";

setProjects(getLocalStorage())
console.log(newProjectArray)
window.onload = getLocalStorage;

DOM()


