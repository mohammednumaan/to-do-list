// import

import { mainContainer } from "../main/DOM";

// delete logic

function deleteTasks(prj, todo, div){
    
    let child = Array.from(mainContainer.children)

    for(let i =0; i < prj.todos.length; i++){
        prj.todos[i].id = prj.todos.indexOf(prj.todos[i])
        console.log(prj.todos[i].id)
    }
    

    prj.todos = prj.todos.filter((todos) => todos.id !== todo.id);
    for (let i = 0; i < child.length; i++){
        if (child[i].id === div.id){
            child[i].removeChild(div)
        }
    }

}

// export

export {deleteTasks}