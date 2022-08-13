import { projects } from "./nav";
import { TaskFactory } from "./factory"
import {UI} from "./ui"

const addTaskToProj = () =>{
    const DOM = UI.giveDomInpts()
    let newTask = TaskFactory(
        DOM.taskName.value,
        DOM.taskDesc.value,
        DOM.taskDate.value,
        DOM.taskCategory.value
    )
    projects.forEach((project)=>{
        if(project.getName() === newTask.getCategory()){
            project.pushTask(newTask);
            console.log(project.taskStorage)
        }
    });
}
export {

    addTaskToProj
}