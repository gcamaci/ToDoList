import {CategoryFactory,TaskFactory } from "./factory";
import { toggleModal } from "./Modal";
import {createNavButton,giveDomInpts,buildTaskElement } from "./ui";

const Gym = CategoryFactory('Gym'); 
const task1 = TaskFactory('deadlife','Just a test','2022-02-02','Gym')
Gym.pushTask(task1)
const Coding = CategoryFactory('Coding')
let projects = [Gym,Coding]
let currentProject = projects[0]

const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    projects.forEach((project)=>{
        let newNavBtn = createNavButton(project.getName())
        newNavBtn.addEventListener('click',toggleProject)
        container.appendChild(newNavBtn)
    });
   
}

const displayTasks = () => {
    const taskContainer = document.querySelector('main')
    taskContainer.innerHTML = ''
    currentProject.taskStorage.forEach((task)=>{
        taskContainer.appendChild(buildTaskElement(
            task.getName(),
            task.getDesc(),
            task.getDate(),
        ))
    })
}
function toggleProject(event){
    const key = event.target.dataset.project;
    projects.forEach((project)=>{
        if(project.getName() === key){
            currentProject = project
        }
    })
    console.log(currentProject.getName())
    displayTasks()

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
    displayTasks()
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

export {addProject,addTaskToProj,displayProjects,displayTasks}