// switch tabs/projects 

function switchTabs(divs,title){
    divs = Array.from(document.querySelectorAll('.project-div'))
    for (let i = 0; i < divs.length; i++){
        console.log(title.id)
        if (divs[i].id === title.id){
            divs[i].style.display = 'block'                    
        }
        else{
            divs[i].style.display = 'none'
        }
    }
}

// export

export {switchTabs}