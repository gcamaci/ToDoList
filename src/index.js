import './style.css';
import { 
    initialUi, 
    projectModal 
} from './modules/ui';
import { 
    displayProjects,
    toggleProjInpt,
    makeFalse 
} from './modules/functions';
import { categoryFactory,taskFactory } from './modules/factory';



displayProjects()


const task = document.getElementById('task_button')
task.addEventListener('click',makeFalse)


const newProject = document.getElementById('add_Project_Btn');
newProject.addEventListener('click', toggleProjInpt)