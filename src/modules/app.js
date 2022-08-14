import {CategoryFactory,TaskFactory } from "./factory";
import { toggleModal } from "./Modal";
import {createNavButton,giveDomInpts } from "./ui";

const Gym = CategoryFactory('Gym'); 
const Coding = CategoryFactory('Coding')
let projects = [Gym,Coding]
let display = '';

const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    projects.forEach((project)=>{
        container.appendChild(createNavButton(project.getName()))
    });
   
}
function displayTasks(event){
    const taskContainer = document.querySelector('main')
    const key = event.target.dataset.project;
    let currentProject;
    projects.forEach((project)=>{
        if(project.getName() === key){
            currentProject = project
        }
    })
    console.log(currentProject.getName())
    console.log(currentProject)
    

}
//create a task and Push it to the correct project task array
const addTaskToProj = () =>{
    const DOM = giveDomInpts()
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
    toggleModal()
}
//adds Project to projects array
const addProject = () => {
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = CategoryFactory(projInput.value);
    projects.push(newProject)
    displayProjects()
    toggleModal()
    projInput.value = ''

    console.log(projects)
}

export {addProject,addTaskToProj,displayTasks,displayProjects}