
// import modules
import {Project, newProjectArray} from "./createNewProject";
import { Todo } from "./createNewToDo";
import { getLocalStorage, setLocalStorage } from "./localstorage";
import { switchTabs } from "./functionalities/switchTabs";
import { editFunctionality } from "./functionalities/editTasks";
import { deleteTasks } from "./functionalities/deleteTasks";
import { completeTasks } from "./functionalities/completeTasks";

// variable declarations

const sidebarContainer = document.querySelector('.sidebar-container')
const mainContainer = document.querySelector('.main-screen-container')
const container = document.querySelector('.container')
const newProjectButton = document.querySelector('.add-project')




// main dom function

function DOM (){

    newProjectButton.addEventListener('click', () => {
        projectForm()
    })

};

function projectForm(){
        
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
    sidebarContainer.appendChild(form)

    addProject.addEventListener('click', () => {
        let title = titleName.value
        displayProject(title)
        form.reset()
        form.style.display = 'none'
        
    })
    

}

// project

function projectDivs(name, prj, task) {
    
    const projectNameDiv = document.createElement('div')
    const projectName = document.createElement('h2')
    projectNameDiv.appendChild(projectName)
    sidebarContainer.appendChild(projectNameDiv)
    projectName.classList.add('project-title')
    projectName.classList.add('project-title-hover')
    projectName.innerText = name.name


    projectNameDiv.appendChild(projectName)
    sidebarContainer.appendChild(projectNameDiv)

    projectName.addEventListener('click' , () => {
        switchTabs(prj, task)
    })

    
};


// project

function displayProject(prj) {
    
    let newProject;
    if (newProjectArray.includes(prj)){
        newProject = prj
    }
    else{
        newProject = new Project(prj)
        newProjectArray.push(newProject)
    }
    
    console.log(newProjectArray)
    
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project-div')
        
    const projectTitle = document.createElement('h2')
    projectTitle.classList.add('project-name')
    projectTitle.id = newProjectArray.indexOf(newProject)
    
    const newTaskButton = document.createElement('button')
    newTaskButton.classList.add('button-add')
    newTaskButton.setAttribute('type', 'button')
    
    const newButtonDiv = document.createElement('div')
    newButtonDiv.classList.add('new-div')
        
    mainContainer.appendChild(projectDiv)
    newButtonDiv.appendChild(newTaskButton)
    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(newButtonDiv)

   
    projectTitle.innerText = newProject.name
    newTaskButton.textContent = 'ADD TASK +'
    projectDiv.id = projectTitle.id
    projectDiv.style.display = 'none'
    
    projectDivs(newProject, projectDiv, projectTitle)

    newTaskButton.addEventListener('click', () => {
        todoForm(newProject, projectDiv)
    })


    setLocalStorage()
    
}

// todo

function todoForm(project, prjDiv){

    const todoForm = document.createElement('form')
    todoForm.classList.add('todo-form')

    let taskTitle = document.createElement('input')
    taskTitle.setAttribute('type', 'text')
    taskTitle.setAttribute('id', 'new-task')
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

    mainContainer.appendChild(todoForm)


    addTaskButton.addEventListener('click', () => {
        displayToDo(project, taskTitle, taskDesc, taskDate, taskPrior, prjDiv)
        todoForm.reset()
        todoForm.style.display ='none'
    })

    

}


// todo

function displayToDo(project, title,desc,date, prior, div){

    let newTodo = new Todo(title.value, desc.value, date.value, prior.value, project.name)
    project.todos.push(newTodo)
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
    div.appendChild(taskDivs)    

    const completeTask = document.createElement('button')
    completeTask.setAttribute('type', 'button')
    completeTask.classList.add('complete-button')
    completeTask.textContent = 'Completed!'
    taskDivs.appendChild(completeTask)

    setLocalStorage()

    


    // delete event

    deleteTask.addEventListener('click', (event) => {
        deleteTasks(event, project, div,newTodo)
        setLocalStorage()

    })

    // edit event

    editTask.addEventListener('click', () => {
        editForm(taskDivs, tasks,taskDescr,taskDates,taskPriority,taskLI,taskUL,deleteTask,editTask,completeTask,newTodo,project)
    })

    // complete event
    
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
}


// edit

function editForm(div, title, desc, date, prior, li, ul, del, edit, complete, todo, project){
    
    div.innerHTML = ''

    let editForm = document.createElement('form')
    editForm.classList.add('edit-form')
    div.appendChild(editForm)

    let editTitleLabel = document.createElement('label')
    editTitleLabel.textContent = 'Title'
    editTitleLabel.setAttribute('for', 'editTitle')
    editForm.appendChild(editTitleLabel)
    let editTitle = document.createElement('input')
    editTitle.setAttribute('type', 'text')
    editTitle.setAttribute('id', 'editLabel')
    editTitle.value = title.textContent
    editForm.appendChild(editTitle)


    let editDescLabel = document.createElement('label')
    editDescLabel.textContent = 'Description'
    editDescLabel.setAttribute('for', 'editDesc')
    editForm.appendChild(editDescLabel)
    let editDesc = document.createElement('textarea')
    editDesc.textContent = desc.textContent
    editForm.appendChild(editDesc)

    
    let editDateLabel = document.createElement('label')
    editDateLabel.textContent = 'Due-Date'
    editDateLabel.setAttribute('for', 'editDate')
    editForm.appendChild(editDateLabel)
    let editDate = document.createElement('input')
    editDate.setAttribute('type', 'date')
    editDate.value = date.textContent
    editForm.appendChild(editDate)


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

    editPriority.value = prior.textContent
    editForm.appendChild(editPriority)

    let editButton = document.createElement('button')
    editButton.textContent = 'Update Task'
    editButton.type = 'button'
    editForm.appendChild(editButton)

    editButton.addEventListener('click', () => {
        editForm.style.display = 'none'

        title.textContent = editTitle.value
        li.appendChild(title)
        ul.appendChild(li)
        div.appendChild(ul)
        
        desc.textContent = editDesc.value
        div.appendChild(desc)
        
        date.textContent = editDate.value
        div.appendChild(date)
        
        prior.textContent = editPriority.value   
        div.appendChild(prior)
        
        div.appendChild(del)
        div.appendChild(edit)
        div.appendChild(complete)

        editFunctionality(editTitle, editDesc, editDate, editPriority, todo, project) 

        setLocalStorage()
    })
}



export {DOM, mainContainer, sidebarContainer, displayProject}

