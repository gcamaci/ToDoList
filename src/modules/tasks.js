import { projects } from "./nav";
import { TaskFactory } from "./factory"
import {projectModal, taskModal} from "./ui"


let toggle = false;

const toggleTaskForm = () => {
    const main = document.querySelector('main')
    const taskForm = document.getElementById('task_Modal')
    if(toggle === false){
        main.appendChild(taskModal())
    }else{
        main.removeChild(taskForm)
    }
    toggle = !toggle 
}

export {
    toggleTaskForm
}