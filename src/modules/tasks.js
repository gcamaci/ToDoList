import { projects } from "./nav";
import { TaskFactory } from "./factory"
import {GiveDomInpts, taskModal} from "./ui"





const addTaskToProj = () =>{
    const DOM = GiveDomInpts();

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