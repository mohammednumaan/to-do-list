// import

import { newProjectArray } from "../main/createNewProject";

// generate id

function getId(prjs, newprj, prjTitle){
    
    prjTitle.id;

    if (newprj.name == prjs.name){
        prjTitle.id = newProjectArray.indexOf(prjs)
    }
    else{
        prjTitle.id = newProjectArray.indexOf(newprj)
        
    }
    return prjTitle.id
}

// export

export {getId}