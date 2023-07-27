import {Project, newProjectArray} from "./createNewProject";

const sidebarContainer = document.querySelector('.sidebar-container')
const mainContainer = document.querySelector('.main-screen-container')

function createProjectDiv(){

    // creates form

    const form = document.createElement('form')

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

    projectDiv.appendChild(projectName)
    sidebarContainer.appendChild(projectDiv)





    function displayProject(){

        const newProject = new Project(titleName.value, true)
        newProjectArray.push(newProject)
        
        form.reset()
        form.classList.add('inactive')
        
        projectName.innerHTML = newProject.name
    }

    addProject.addEventListener('click', displayProject)




}
export {createProjectDiv}
