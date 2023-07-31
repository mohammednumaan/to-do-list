function switchTabs(divs,title){
    divs = Array.from(document.querySelectorAll('.project-div'))
    //title = Array.from(document.querySelectorAll('.project-name'))
    for (let i = 0; i < divs.length; i++){
        if (divs[i].id === title.id){
            divs[i].style.display = 'block'                    
        }
        else{
            divs[i].style.display = 'none'
        }
    }
}

export {switchTabs}