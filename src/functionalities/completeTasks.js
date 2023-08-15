// complete tasks logic

function completeTasks(task,desc, date, prior,div,value){

        if (value){
                task.classList.add('line')
                desc.classList.add('line')
                date.classList.add('line')
                prior.classList.add('line') 
                div.textContent = 'Not Completed!'
                div.style.backgroundColor = '#db3a34'
        }
        if (!value){
                task.classList.remove('line')
                desc.classList.remove('line')
                date.classList.remove('line')
                prior.classList.remove('line') 
                div.textContent = 'Completed!'
                div.style.backgroundColor = 'green'
        }
}

// export

export {completeTasks}