
import { getLocalStorage, loadTasks, setLocalStorage } from "./localstorage";
import { Todo } from "./createNewToDo";
import { DOM, displayToDo } from "./DOM";
import { displayLocalStorage } from "./displayLocalStorage";





//setProjects(getLocalStorage())

getLocalStorage()
window.addEventListener('load', () => {
    getLocalStorage()
})

console.log(getLocalStorage())
displayLocalStorage()
DOM()



