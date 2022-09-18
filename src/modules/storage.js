
import { CategoryFactory,TaskFactory } from "./factory";

const Gym = CategoryFactory('Gym'); 

const Coding = CategoryFactory('Coding')

const task1 = TaskFactory('Finish UI',"")
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
    saveProjectList
}