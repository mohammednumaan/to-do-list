// import

import { Project } from "./createNewProject";
import { displayProject } from "./defaultProject";
import { DOM } from "./DOM";

// new project button

displayProject()

const newProjectButton = document.querySelector('.add-project')
newProjectButton.addEventListener('click', DOM)