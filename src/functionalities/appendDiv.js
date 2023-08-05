// import

import { mainContainer } from "../main/DOM";

// append divs logic

function appendDiv(div){

    let child = Array.from(mainContainer.children)
    for (let i = 0; i < child.length; i++){
        if (child[i].id == div.id){
            child[i].appendChild(div)
        }
    }
}

// export

export {appendDiv}

