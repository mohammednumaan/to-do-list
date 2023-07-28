// import modules

import {Project, newProjectArray} from "./createNewProject";
import { Todo } from "./createNewToDo";


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

        newTaskButton.addEventListener('click', () => {
            createToDoDiv()
        })
        projectDiv.style.display = 'none'


        // switch tabs logic

        projectName.addEventListener('click', () => {

            let projectDivs = Array.from(document.querySelectorAll('.project-div'))
            for (let i = 0; i < projectDivs.length; i++){
                if (projectDivs[i].id == projectTitle.textContent){
                    projectDivs[i].style.display = 'block'                    
                }
                else{
                    projectDivs[i].style.display = 'none'
                }
            }
        });
        


        // creates project todos

    
        function createToDoDiv(){
    

            // creates todo form
    
            const todoForm = document.createElement('form')
            todoForm.classList.add('todo-form')
    
    
            const taskTitle = document.createElement('input')
            taskTitle.setAttribute('type', 'text')
            taskTitle.setAttribute('id', 'new-task')
            
            taskTitle.required = true;
    
            const taskTitleLabel = document.createElement('label')
            taskTitleLabel.setAttribute('for', 'new-task')
            taskTitleLabel.textContent = 'Title Of Your Task'
    
        
            const taskDesc = document.createElement('textarea')
            taskTitle.setAttribute('id', 'new-desc')
            taskTitle.required = true;
    
            const taskDescLabel = document.createElement('label')
            taskDescLabel.setAttribute('for', 'new-desc')
            taskDescLabel.textContent = 'Description Of Your Task'
    
    
            const taskDate = document.createElement('input')
            taskDate.setAttribute('type', 'date')
            taskDate.setAttribute('id', 'task-date')
            taskTitle.required = true;
    
            const taskDateLabel = document.createElement('label')
            taskDateLabel.textContent = 'DUE-DATE Of Your Task'
            taskDateLabel.setAttribute('for', 'task-date')
    
    
            const taskPrior = document.createElement('select')
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
    
            mainContainer.appendChild(todoForm)
    
            addTaskButton.addEventListener('click', () => {
                displayTodo()
                todoForm.reset()
                mainContainer.removeChild(todoForm)
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
                taskDescr.textContent = `Description : ${newTodo.desc}`
                taskDivs.appendChild(taskDescr)
    
                const taskDates = document.createElement('p')
                taskDates.textContent = `Due-Date : ${newTodo.date}`
                taskDivs.appendChild(taskDates)
    
                const taskPriority = document.createElement('p')
                taskPriority.textContent = `Priority : ${newTodo.priority}`
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
                taskDivs.appendChild(editTask)
    
                projectDiv.appendChild(taskDivs)    
                

                // delete todo logic

                deleteTask.addEventListener('click', (event) => {
                    newProject.removeTask(newTodo.title)
                    projectDiv.removeChild(event.target.parentElement)
                    console.log(newProjectArray)
                })

                // edit todo logic

                editTask.addEventListener('click', (e) =>{
                    let target = e.target.parentElement
                    let currentDiv = target
                    document.querySelector('#new-task').value = currentDiv.children[0].textContent

                })


                // todo toggle complete logic

                //taskDivs.addEventListener('click', () => {
                    //taskDivs.classList.toggle('line')
                //})
            }
        }
    }
}
export {DOM}

