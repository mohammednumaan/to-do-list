import { DOM, displayProject } from "./DOM";
import { getLocalStorage, loadTasks, setLocalStorage } from "./localstorage";

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



