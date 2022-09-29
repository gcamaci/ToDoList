
import { CategoryFactory,TaskFactory } from "./factory";

const Gym = CategoryFactory('Gym'); 

const Coding = CategoryFactory('Coding')

const task1 = TaskFactory('Finish UI',"Finish Styling UI","09/18/2022","Coding");
const task2 = TaskFactory('add Edit Task Button',"Add edit task button to task cards","09/18/2022","Coding");
const task3 = TaskFactory('Javascript',"Make drop down selection for category input in task creation form","09/18/2022","Coding");
const task4 = TaskFactory('Javascript',"display finished tasks function","09/18/2022","Coding");
Coding.taskStorage.push(task1)
Coding.taskStorage.push(task2)
Coding.taskStorage.push(task3)
Coding.taskStorage.push(task4)
let projects = [Gym,Coding]


const initialStorage = (() => {
    if(localStorage.length  === 0 ){
        localStorage.setItem("projects",JSON.stringify(projects));
    }
    
})();
let localProjects = JSON.parse(localStorage.getItem("projects"));

const storeProject = (newProj) => {
    localProjects.push(newProj)
    localStorage.setItem("projects", JSON.stringify(localProjects))
    console.log(localStorage)
}
const saveProjectList = () => {
    localStorage.setItem("projects", JSON.stringify(localProjects))
}
export{
    storeProject,
    localProjects,
    saveProjectList,
    initialStorage
}