function switchTabs(divs,title){
    divs = Array.from(document.querySelectorAll('.project-div'))
    for (let i = 0; i < divs.length; i++){
        if (divs[i].id == title.textContent){
            divs[i].style.display = 'block'                    
        }
        else{
            divs[i].style.display = 'none'
        }
    }
}

export {switchTabs}