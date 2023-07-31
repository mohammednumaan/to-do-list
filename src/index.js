import { DOM } from "./DOM";
import { getLocalStorage, loadTasks } from "./localstorage";
import { newProjectArray} from "./createNewProject";


//setProjects(getLocalStorage())

window.onload = getLocalStorage();
DOM()


