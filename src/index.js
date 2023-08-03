// import
import { DOM } from "./main/DOM";
import { displayLocalStorage } from "./localstorage/displayStorage";
import { getLocalStorage } from "./localstorage/localStorage";
import "./style.css"


// initialize

getLocalStorage()
window.onload = getLocalStorage();

displayLocalStorage()
DOM()




