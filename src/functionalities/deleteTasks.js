// import

import { mainContainer } from "../main/DOM";

// delete logic

function removeTasks(project, todo, div){
    
    let child = Array.from(mainContainer.children)

    project.todos = project.todos.filter((todos) => todos.id !== todo.id);
    for (let i = 0; i < child.length; i++){
        if (child[i].id === div.id){
            child[i].removeChild(div)
        }
    }
}

// export

export {removeTasks}