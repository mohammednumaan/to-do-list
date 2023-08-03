// import

import { setLocalStorage } from "../localstorage/localStorage";

// select dom elements

const child = Array.from(document.querySelectorAll('.project-div'));

// delete tasks logic

function deletTasks(e,prj, todo){
    for (let i = 0; i < child.length; i++){
        prj.todos = prj.todos.filter((todos) => todos.title !== todo.title);
        child[i].removeChild(e.target.parentElement)
        localStorage.removeItem('project')
        setLocalStorage()
    }   
}

// export 

export {deletTasks}