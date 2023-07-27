import { Project } from "./createNewProject";
import { createProjectDiv } from "./DOM";


const newProjectButton = document.querySelector('.add-project')

newProjectButton.addEventListener('click', createProjectDiv)