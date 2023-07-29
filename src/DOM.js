// import modules

import {Project, newProjectArray} from "./createNewProject";
import { Todo } from "./createNewToDo";
import { deleteTasks } from "./deleteTasks";
import { editFunctionality } from "./editTasks";
import { switchTabs } from "./switchTabs";


// variable declarations

const sidebarContainer = document.querySelector('.sidebar-container')
const mainContainer = document.querySelector('.main-screen-container')
const container = document.querySelector('.container')



// main dom function

function DOM(){


    // creates project form

    const form = document.createElement('form')
    form.classList.add('project-form')


    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'new-project')

    const titleName = document.createElement('input')
    titleName.setAttribute('type', 'text')
    titleName.setAttribute('id', 'new-project')


    const addProject = document.createElement('button')
    addProject.setAttribute('type', 'button')

    addProject.textContent = 'CREATE PROJECT'
    titleLabel.textContent = 'TITLE'

    form.appendChild(titleLabel)
    form.appendChild(titleName)
    form.appendChild(addProject)
    mainContainer.appendChild(form)



    // creates project div

    const projectDiv = document.createElement('div')
    const projectName = document.createElement('h2')
    projectName.classList.add('project-title')
    projectName.classList.add('project-title-hover')

    projectDiv.appendChild(projectName)
    sidebarContainer.appendChild(projectDiv)

    addProject.addEventListener('click', displayProject)


    // displays project div

    function displayProject(){

        // creates project-to-do display/divs

        const newProject = new Project(titleName.value, false)
        newProjectArray.push(newProject)
        form.reset()
        form.style.display = 'none'

        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project-div')
    

        const projectTitle = document.createElement('h2')
        projectTitle.classList.add('project-name')

        const newTaskButton = document.createElement('button')
        newTaskButton.classList.add('button-add')
        newTaskButton.setAttribute('type', 'button')

        const newButtonDiv = document.createElement('div')
        newButtonDiv.classList.add('new-div')
    
        mainContainer.appendChild(projectDiv)
        newButtonDiv.appendChild(newTaskButton)
        projectDiv.appendChild(projectTitle)
        projectDiv.appendChild(newButtonDiv)



        projectName.innerHTML = newProject.name
        projectTitle.innerText = newProject.name
        newTaskButton.textContent = 'ADD TASK +'
        projectDiv.id = projectTitle.textContent
        projectDiv.style.display = 'none'

        newTaskButton.addEventListener('click', createToDoDiv)

        // switch tabs event

        projectName.addEventListener('click', () => {
            switchTabs(projectDiv, projectTitle)
        })
        
        // creates project todos
    
        function createToDoDiv(){
    
            // creates todo form
    
            const todoForm = document.createElement('form')
            todoForm.classList.add('todo-form')
        
            let taskTitle = document.createElement('input')
            taskTitle.setAttribute('type', 'text')
            taskTitle.setAttribute('id', 'new-task')
            
            taskTitle.required = true;
    
            const taskTitleLabel = document.createElement('label')
            taskTitleLabel.setAttribute('for', 'new-task')
            taskTitleLabel.textContent = 'Title Of Your Task'
    
        
            let taskDesc = document.createElement('textarea')
            taskTitle.setAttribute('id', 'new-desc')
            taskTitle.required = true;
    
            const taskDescLabel = document.createElement('label')
            taskDescLabel.setAttribute('for', 'new-desc')
            taskDescLabel.textContent = 'Description Of Your Task'
    
    
            let taskDate = document.createElement('input')
            taskDate.setAttribute('type', 'date')
            taskDate.setAttribute('id', 'task-date')
            taskTitle.required = true;
    
            const taskDateLabel = document.createElement('label')
            taskDateLabel.textContent = 'DUE-DATE Of Your Task'
            taskDateLabel.setAttribute('for', 'task-date')
    
    
            let taskPrior = document.createElement('select')
            taskPrior.setAttribute('id', 'priority')
            taskTitle.required = true;
    
            const taskPriorLabel = document.createElement('label')
            taskPriorLabel.setAttribute('for', 'priority')
            taskPriorLabel.textContent = 'Priority Of Your Task'
    
    
            const low = document.createElement('option')
            low.setAttribute('name', 'Low Priority')
            low.textContent = 'Low'
            taskPrior.appendChild(low)
    
            const medium = document.createElement('option')
            medium.setAttribute('name', 'Medium Priority')
            medium.textContent = 'Medium'
            taskPrior.appendChild(medium)
    
            const high= document.createElement('option')
            high.setAttribute('name', 'High Priority')
            high.textContent = 'High'
            taskPrior.appendChild(high)
    
            const addTaskButton = document.createElement('button')
            addTaskButton.setAttribute('type', 'button')
            addTaskButton.classList.add('add')
            addTaskButton.textContent = 'ADD +'
    
            todoForm.appendChild(taskTitleLabel)
            todoForm.appendChild(taskTitle)
    
            todoForm.appendChild(taskDescLabel)
            todoForm.appendChild(taskDesc)
    
            todoForm.appendChild(taskDateLabel)
            todoForm.appendChild(taskDate)
    
            todoForm.appendChild(taskPriorLabel)
            todoForm.appendChild(taskPrior)
            todoForm.appendChild(addTaskButton)
    
            container.appendChild(todoForm)

            // display todo event

            addTaskButton.addEventListener('click', () => {
                displayTodo()
                todoForm.reset()
                todoForm.style.display ='none'
            })
            
            // displays todo
    
            function displayTodo(){
                   
                let newTodo = new Todo(taskTitle.value, taskDesc.value, taskDate.value, taskPrior.value, newProject.name)
                newProject.todos.push(newTodo)
                console.log(newProjectArray)
                
                const taskDivs = document.createElement('div')

                taskDivs.classList.add('task-div')

                const taskUL = document.createElement('ul')
                taskDivs.appendChild(taskUL)
                
                const taskLI = document.createElement('li')
                taskUL.appendChild(taskLI)

                const tasks = document.createElement('h2')
      
                tasks.textContent = newTodo.title
                taskLI.appendChild(tasks)
    
                const taskDescr = document.createElement('p')
                taskDescr.textContent = `${newTodo.desc}`
                taskDivs.appendChild(taskDescr)
    
                const taskDates = document.createElement('p')
                taskDates.textContent = `${newTodo.date}`
                taskDivs.appendChild(taskDates)
    
                const taskPriority = document.createElement('p')
                taskPriority.textContent = `${newTodo.priority}`
                taskDivs.appendChild(taskPriority)

                const deleteTask = document.createElement('button')
                deleteTask.setAttribute('type', 'button')
                deleteTask.classList.add('delete-button')
                deleteTask.textContent = 'Delete This Task'
                taskDivs.appendChild(deleteTask)

                const editTask = document.createElement('button')
                editTask.setAttribute('type', 'button')
                editTask.classList.add('edit-button')
                editTask.textContent = 'Edit This Task'
                editTask.classList.add('edit-task-button')
                taskDivs.appendChild(editTask)
                projectDiv.appendChild(taskDivs)    

                const completeTask = document.createElement('button')
                completeTask.setAttribute('type', 'button')
                completeTask.classList.add('complete-button')
                completeTask.textContent = 'Completed!'
                taskDivs.appendChild(completeTask)


                // delete button

                deleteTask.addEventListener('click', (event) => {
                    deleteTasks(event, newProject, projectDiv,newTodo)

                })

                // edit button

                editTask.addEventListener('click', editForm)
                
                // complete button

                completeTask.addEventListener('click' , () => {
                    completeTasks(tasks, taskDescr, taskDates, taskPriority)
                })


                function editForm() {

                    taskDivs.innerHTML = ''

                    let editForm = document.createElement('form')
                    editForm.classList.add('edit-form')
                    taskDivs.appendChild(editForm)

                    // title edit

                    let editTitleLabel = document.createElement('label')
                    editTitleLabel.textContent = 'Title'
                    editTitleLabel.setAttribute('for', 'editTitle')
                    editForm.appendChild(editTitleLabel)

                    let editTitle = document.createElement('input')
                    editTitle.setAttribute('type', 'text')
                    editTitle.setAttribute('id', 'editLabel')
                    editTitle.value = tasks.textContent
                    editForm.appendChild(editTitle)


                    // description edit

                    let editDescLabel = document.createElement('label')
                    editDescLabel.textContent = 'Description'
                    editDescLabel.setAttribute('for', 'editDesc')
                    editForm.appendChild(editDescLabel)


                    let editDesc = document.createElement('textarea')
                    editDesc.textContent = taskDescr.textContent
                    editForm.appendChild(editDesc)

                    
                    // date edit

                    let editDateLabel = document.createElement('label')
                    editDateLabel.textContent = 'Due-Date'
                    editDateLabel.setAttribute('for', 'editDate')
                    editForm.appendChild(editDateLabel)

                    let editDate = document.createElement('input')
                    editDate.setAttribute('type', 'date')
                    editDate.value = taskDates.textContent
                    editForm.appendChild(editDate)


                    // priority edit
                    
                    let editPriorLabel = document.createElement('label')
                    editPriorLabel.textContent = 'Priority'
                    editPriorLabel.setAttribute('for', 'editPrior')
                    editForm.appendChild(editPriorLabel)

                    let editPriority = document.createElement('select')

                    let lowPrior = document.createElement('option')
                    lowPrior.setAttribute('name', 'Low')
                    lowPrior.textContent = 'Low'
                    editPriority.appendChild(lowPrior)
            
            
                    let mediumPrior = document.createElement('option')
                    mediumPrior.setAttribute('name', 'Medium')
                    mediumPrior.textContent = 'Medium'
                    editPriority.appendChild(mediumPrior)
            
            
                    let highPrior= document.createElement('option')
                    highPrior.setAttribute('name', 'High Priority')
                    highPrior.textContent = 'High'
                    editPriority.appendChild(highPrior)

                    editPriority.value = taskPriority.textContent
                    editForm.appendChild(editPriority)

                    let editButton = document.createElement('button')
                    editButton.textContent = 'Update Task'
                    editButton.type = 'button'
                    editForm.appendChild(editButton)


                    // update button

                    editButton.addEventListener('click', () => {
                        editForm.style.display = 'none'

                        tasks.textContent = editTitle.value
                        taskLI.appendChild(tasks)
                        taskUL.appendChild(taskLI)
                        taskDivs.appendChild(taskUL)
                        
                        taskDescr.textContent = editDesc.value
                        taskDivs.appendChild(taskDescr)
                        
                        taskDates.textContent = editDate.value
                        taskDivs.appendChild(taskDates)
                        
                        taskPriority.textContent = editPriority.value   
                        taskDivs.appendChild(taskPriority)
                        
                        taskDivs.appendChild(deleteTask)
                        taskDivs.appendChild(editTask)
                        taskDivs.appendChild(completeTask)

                        editFunctionality(editTitle, editDesc, editDate, editPriority, newTodo, newProject) 
                        
                    })
                };
            };
        };
    };
};

// export 

export {DOM, mainContainer, sidebarContainer}

