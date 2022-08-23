import {CategoryFactory,TaskFactory } from "./factory";
import { toggleModal } from "./Modal";
import {createNavButton,giveDomInpts,buildTaskElement } from "./ui";
import { storeProject,localProjects,saveProjectList} from "./storage";




let currentProject = localProjects[0]


const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    localProjects.forEach((project)=>{
        let newNavBtn = createNavButton(project.name)
        newNavBtn.addEventListener('click',toggleProject)
        container.appendChild(newNavBtn)
        
    });
    console.log(localProjects)
    
}
//create Task Dom, display Task Dom, and add event listeners
const displayTasks = () => {
    const taskContainer = document.querySelector('main')
    taskContainer.innerHTML = ''
    currentProject.taskStorage.forEach((task)=>{
        //console.log(task.idCode)
        let taskElement = buildTaskElement(
            task.name,
            task.desc,
            task.date,
            task.idCode
        )
        taskContainer.appendChild(taskElement);
        
    })

    const taskButtons = document.querySelectorAll('.task_Btn')
    taskButtons.forEach((btn) =>{
        btn.addEventListener('click',taskListeners)
    });
}

function toggleProject(event){
    const key = event.target.dataset.project;
    localProjects.forEach((project)=>{
        if(project.name === key){
            currentProject = project
        }
    })
    console.log(currentProject.taskStorage)
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
    localProjects.forEach((project)=>{
        if(project.name === newTask.category){
            project.taskStorage.push(newTask)
            console.log(project.taskStorage)
        }
    });
    saveProjectList()
    toggleModal()
    displayTasks()
}
//adds Project to projects array
const addProject = () => {
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = CategoryFactory(projInput.value);
    storeProject(newProject)
    displayProjects()
    toggleModal()
    projInput.value = ''

    console.log(projects)
}

function taskListeners(event){
    let taskcode = event.target.dataset.taskId
    let eventName = event.target.name
    if(eventName === 'Delete'){
        removeTask(taskcode)
    }else if(eventName === 'Status'){
        taskStatus(taskcode);
    }
}

const removeTask = (taskId) => {
    currentProject.taskStorage.forEach((task,index)=>{
        if(task.idCode == taskId){
            currentProject.taskStorage.splice(index,1);
        }
    })
    displayTasks()
    saveProjectList()
}


function taskStatus(code){
    currentProject.taskStorage.forEach((task)=>{
        if(task.idCode == code){
            task.status = !task.status
            //console.log(task.getStatus())
            console.log(task.idCode)
            console.log(task.status)
            //console.log(task.getName())
        }
    })  
}



export {
    addProject,
    addTaskToProj,
    displayProjects,
    displayTasks,
}