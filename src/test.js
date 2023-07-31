
        completeTask.addEventListener('click' , () => {
            completeTasks(tasks, taskDescr, taskDates, taskPriority)
            if(tasks.classList.contains('line')){
                completeTask.textContent = 'Not Completed!'
                completeTask.style.backgroundColor = '#db3a34'
            }
            else{
                completeTask.textContent = 'Completed!'
                completeTask.style.backgroundColor = 'green'
            }
            setLocalStorage()
        })


                



// export 
