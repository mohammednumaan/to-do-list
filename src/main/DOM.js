
// import modules

import {Project, newProjectArray} from "./createNewProject";
import { switchTabs } from "../functionalities/switchTabs";
import { editFunctionality, returnTodo, updateTodo } from "../functionalities/editTasks";
import { completeTasks, checkComplete } from "../functionalities/completeTasks";
import { setLocalStorage } from "../localstorage/localStorage";
import { todoObject } from "../functionalities/generateTodo";
import { removeTasks } from "../functionalities/deleteTasks";
import { getId } from "../functionalities/generateId";
import { appendDiv, removeDiv } from "../functionalities/appendAndRemove";




// getting elements

const sidebarContainer = document.querySelector('.sidebar-container')
const mainContainer = document.querySelector('.main-screen-container')
const newProjectButton = document.querySelector('.add-project')


// main dom function

function DOM (){

    // new project event

    newProjectButton.addEventListener('click', () => {
        projectForm()
    })

};


// project form

function projectForm(){
        
    const form = document.createElement('form')
    form.classList.add('project-form')

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'new-project')

    const titleName = document.createElement('input')
    titleName.required = true;
    titleName.setAttribute('type', 'text')
    titleName.setAttribute('id', 'new-project')


    const addProject = document.createElement('button')
    addProject.setAttribute('type', 'submit')

    addProject.textContent = 'CREATE PROJECT'
    titleLabel.textContent = 'TITLE'

    form.appendChild(titleLabel)
    form.appendChild(titleName)
    form.appendChild(addProject)
    sidebarContainer.appendChild(form)


    // add project event

    form.addEventListener('submit', () => {
        
        let title = titleName
        displayProject(title)
        form.reset()
        form.style.display = 'none'
        
        
    })
}


// sidebar display of all the projects

function projectDivs(name, prj, div) {
    
    const projectNameDiv = document.createElement('div')
    const projectName = document.createElement('h2')
    projectNameDiv.id = div.id

    projectNameDiv.appendChild(projectName)
    sidebarContainer.appendChild(projectNameDiv)
    projectNameDiv.classList.add('project-name-div')
    projectName.classList.add('project-title')
    projectName.classList.add('project-title-hover')
    projectName.innerText = name.name

    const deleteProject = document.createElement('button')
    deleteProject.textContent = 'Delete!'
    deleteProject.type = 'button'
    deleteProject.id = 'del-project'

    projectNameDiv.appendChild(projectName)
    projectNameDiv.appendChild(deleteProject)
    sidebarContainer.appendChild(projectNameDiv)


    // delete project
    deleteProject.addEventListener('click', (event) => {
        console.log(div.id, projectNameDiv.id)
        if(div.id === projectNameDiv.id){
            mainContainer.removeChild(div)
            sidebarContainer.removeChild(projectNameDiv)
            newProjectArray.splice(newProjectArray.indexOf(name),1)
            setLocalStorage()
        }
    });

    // switch projects/tabs events

    projectName.addEventListener('click' , () => {
        switchTabs(prj, div)
    })    


};


// display new projects

function displayProject(prj) {


    // generate new projects

    
    let newProject;
    if (newProjectArray.includes(prj)){
        newProject = new Project(prj.name) 
    }
    else{
        newProject = new Project(prj.value)
        newProjectArray.push(newProject)
    }
    setLocalStorage()

    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project-div')
    
    const projectTitle = document.createElement('h2')
    projectTitle.classList.add('project-name')
    
    const newTaskButton = document.createElement('button')
    newTaskButton.classList.add('button-add')
    newTaskButton.type = 'button'
    
    const newButtonDiv = document.createElement('div')
    newButtonDiv.classList.add('new-div')
    
    let newId = getId(prj, newProject, projectTitle)

    newButtonDiv.appendChild(newTaskButton)
    projectDiv.appendChild(projectTitle)
    projectDiv.appendChild(newButtonDiv)
    mainContainer.appendChild(projectDiv)

    projectTitle.innerText = newProject.name
    newTaskButton.textContent = 'ADD TASK +'
    projectDiv.id = newId;
    projectDiv.style.display = 'none'
    
    projectDivs(newProject, projectTitle, projectDiv)

    // add new task event

    newTaskButton.addEventListener('click', () => {
        if (newProject.name == prj.name){
            todoForm(prj)
        }
        else{
            console.log('else again')
            todoForm(newProject)
        }
    })
}


// todo form

function todoForm(prjName){

    const todoForm = document.createElement('form')
    todoForm.classList.add('todo-form')

    let taskTitle = document.createElement('input')
    taskTitle.type = 'text'
    taskTitle.id = 'new-task'
    taskTitle.required = true;
    const taskTitleLabel = document.createElement('label')
    taskTitleLabel.for = 'new-task'
    taskTitleLabel.textContent = 'Title Of Your Task'

    let taskDesc = document.createElement('textarea')
    taskDesc.id = 'new-desc'
    taskDesc.required = true;

    const taskDescLabel = document.createElement('label')
    taskDescLabel.for = 'new-desc'
    taskDescLabel.textContent = 'Description Of Your Task'

    let taskDate = document.createElement('input')
    taskDate.type = 'date'
    taskDate.id = 'task-date'
    taskDate.required = true;

    const taskDateLabel = document.createElement('label')
    taskDateLabel.textContent = 'DUE-DATE Of Your Task'
    taskDateLabel.for = 'task-date'

    let taskPrior = document.createElement('select')
    taskPrior.id= 'priority'
    const taskPriorLabel = document.createElement('label')
    taskPriorLabel.for = 'priority'
    taskPrior.required = true;
    taskPriorLabel.textContent = 'Priority Of Your Task'

    const low = document.createElement('option')
    low.name = 'Low Priority'
    low.textContent = 'Low'
    taskPrior.appendChild(low)

    const medium = document.createElement('option')
    medium.name = 'Medium Priority'
    medium.textContent = 'Medium'
    taskPrior.appendChild(medium)

    const high= document.createElement('option')
    high.name = 'High Priority'
    high.textContent = 'High'
    taskPrior.appendChild(high)

    const addTaskButton = document.createElement('button')
    addTaskButton.type = 'button'
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

    // add task event

    addTaskButton.addEventListener('click', () => {
        let todoList = todoObject(taskTitle.value, taskDesc.value, taskDate.value, taskPrior.value, prjName)
        displayToDo(todoList, prjName)
    
        todoForm.reset()
        todoForm.style.display ='none'
    })

}


// display newly generated todos

function displayToDo(todo, project){
   
    const taskDivs = document.createElement('div')
    taskDivs.classList.add('task-div')
    taskDivs.id =  newProjectArray.indexOf(project)

    const taskUL = document.createElement('ul')
    taskDivs.appendChild(taskUL)
    const taskLI = document.createElement('li')
    taskUL.appendChild(taskLI)

    const tasks = document.createElement('h2')
    tasks.textContent = `${todo.title}`
    taskLI.appendChild(tasks)

    const taskDescr = document.createElement('p')
    taskDescr.textContent = `${todo.desc}`
    taskDivs.appendChild(taskDescr)

    const taskDates = document.createElement('p')
    taskDates.textContent = `${todo.date}`
    taskDivs.appendChild(taskDates)

    const taskPriority = document.createElement('p')
    taskPriority.textContent = `${todo.priority}`
    taskDivs.appendChild(taskPriority)

    const deleteTask = document.createElement('button')
    deleteTask.type = 'button'
    deleteTask.classList.add('delete-button')
    deleteTask.textContent = 'Delete Task'
    taskDivs.appendChild(deleteTask)

    const editTask = document.createElement('button')
    editTask.type = 'button'
    editTask.classList.add('edit-button')
    editTask.textContent = 'Edit Task'
    editTask.classList.add('edit-task-button')
    taskDivs.appendChild(editTask)

    const completeTask = document.createElement('button')
    completeTask.setAttribute('type', 'button')
    completeTask.classList.add('complete-button')
    completeTask.textContent = 'Completed!'

    taskDivs.appendChild(completeTask)
    completeTasks(tasks, taskDescr, taskDates, taskPriority,completeTask, todo.completed)  
    
    // appends each new tasks to specific project div

    appendDiv(taskDivs)

    // delete event

    deleteTask.addEventListener('click', () => {

        removeTasks(project, todo, taskDivs)
        localStorage.removeItem('project')
        setLocalStorage()
    })
    

    // edit event

    editTask.addEventListener('click', () => {
        editForm(todo, project, taskLI, taskDivs, tasks, taskDescr, taskDates, taskPriority, taskUL,deleteTask,editTask,completeTask)
    })

       
    // complete event


    completeTask.addEventListener('click' , () => {

        if (todo.completed === false){
            completeTasks(tasks, taskDescr, taskDates, taskPriority,completeTask, todo.completed)     
            setLocalStorage()
            todo.completed = true;
        }
        else{
            todo.completed = false;
        }
        completeTasks(tasks, taskDescr, taskDates, taskPriority, completeTask, todo.completed)     
        setLocalStorage()
        

    })  
 
}

// edit form

function editForm(todo, project, li, div, title,desc,date,prior ,ul, del, edit, complete){
    
    div.innerHTML = ''

    let editForm = document.createElement('form')
    editForm.classList.add('edit-form')
    div.appendChild(editForm)

    let editTitleLabel = document.createElement('label')
    editTitleLabel.textContent = 'Title'
    editTitleLabel.for = 'editTitle'
    editForm.appendChild(editTitleLabel)
    let editTitle = document.createElement('input')
    editTitle.type = 'text'
    editTitle.id ='editLabel'
    editTitle.value = title.textContent
    editForm.appendChild(editTitle)


    let editDescLabel = document.createElement('label')
    editDescLabel.textContent = 'Description'
    editDescLabel.for = 'editDesc'
    editForm.appendChild(editDescLabel)
    let editDesc = document.createElement('textarea')
    editDesc.textContent = desc.textContent
    editForm.appendChild(editDesc)

    
    let editDateLabel = document.createElement('label')
    editDateLabel.textContent = 'Due-Date'
    editDateLabel.for = 'editDate'
    editForm.appendChild(editDateLabel)
    let editDate = document.createElement('input')
    editDate.type = 'date'
    editDate.value = date.textContent
    editForm.appendChild(editDate)


    let editPriorLabel = document.createElement('label')
    editPriorLabel.textContent = 'Priority'
    editPriorLabel.for = 'editPrior'
    editForm.appendChild(editPriorLabel)
    let editPriority = document.createElement('select')

    let lowPrior = document.createElement('option')
    lowPrior.name = 'Low'
    lowPrior.textContent = 'Low'
    editPriority.appendChild(lowPrior)

    let mediumPrior = document.createElement('option')
    mediumPrior.name = 'Medium Priority'
    mediumPrior.textContent = 'Medium'
    editPriority.appendChild(mediumPrior)

    let highPrior= document.createElement('option')
    highPrior.name = 'High Priority'
    highPrior.textContent = 'High'
    editPriority.appendChild(highPrior)

    editPriority.value = prior.textContent
    editForm.appendChild(editPriority)

    let editButton = document.createElement('button')
    editButton.textContent = 'Update Task'
    editButton.type = 'button'
    editForm.appendChild(editButton)


    // edit task event

    editButton.addEventListener('click', () => {

        
        editForm.style.display = 'none'

        li.children[0].textContent = editTitle.value
        li.appendChild(li.children[0])
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

          
    
        editFunctionality(editTitle.value, editDesc.value, editDate.value, editPriority.value, todo, project) 
        let updatedTodo =  editFunctionality(editTitle.value, editDesc.value, editDate.value, editPriority.value, todo, project) 
        todo = updatedTodo
        complete.addEventListener('click' , () => {

            if (todo.completed === false){
                completeTasks(li, desc, date, prior,complete, todo.completed)     
                setLocalStorage()
                todo.completed = true;
            }
            else{
                todo.completed = false;
            } 
            setLocalStorage()
        

        });
    })
}


// export

export {DOM, displayProject, displayToDo, mainContainer, sidebarContainer}

