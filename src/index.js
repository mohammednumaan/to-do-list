// import
import { DOM } from "./main/DOM";
import { displayLocalStorage } from "./localstorage/displayStorage";
import { getLocalStorage } from "./localstorage/localStorage";
import "./style.css"


// initialize
DOM()
getLocalStorage()
window.onload = getLocalStorage();

displayLocalStorage()





