
// select dom elements

const child = Array.from(document.querySelectorAll('.project-div'));

// main appennd logic

function append(div){
    for (let i = 0; i < child.length; i++){
        child[i].id = i
        child[i].appendChild(div)
        console.log(`added in ${child[i].id}`)
    }

}

// export 

export {append}
