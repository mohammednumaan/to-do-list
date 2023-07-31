function completeTasks(task, desc, date, prior){;
    task.classList.toggle('line')
    desc.classList.toggle('line')
    date.classList.toggle('line')
    prior.classList.toggle('line')

}

export {completeTasks}