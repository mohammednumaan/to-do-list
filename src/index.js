// import
import "./style.css"
import { DOM } from "./main/DOM";
import { displayLocalStorage } from "./localstorage/displayStorage";
import { getLocalStorage } from "./localstorage/localStorage";


// initialize

getLocalStorage()
window.onload = getLocalStorage();

displayLocalStorage()
DOM()




