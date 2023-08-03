// import

import { DOM} from "./main/DOM";
import { newProjectArray } from "./main/createNewProject";
import { displayLocalStorage } from "./localstorage/displayStorage";
import { getLocalStorage, setLocalStorage } from "./localstorage/localStorage";


// initialize


getLocalStorage()
window.onload = getLocalStorage();

displayLocalStorage()
DOM()




