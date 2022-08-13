import {CategoryFactory } from "./factory";
import {UI } from "./ui";
const Gym = CategoryFactory('Gym');
const Coding = CategoryFactory('Coding')
let projects = [Gym,Coding]
let toggle = false

const toggleModal = () => {
    if(toggle === false){
        document.body.appendChild(UI.buildModal())
    }else{
        const modal = document.querySelector('.master_Modal_Container')
        document.body.removeChild(modal) 
    }
    toggle = !toggle
}
//Nav controlls and functions
const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    projects.forEach((project)=>{
        container.appendChild(UI.createNavButton(project.getName()))
    });
   
}
function displayForms(event){
    const container = document.getElementById('modal_Forms');
    container.innerHTML = ''

    if(event.target.id === 'new_Project'){
        container.appendChild(UI.buildProjectForm())
    }else{
        container.appendChild(UI.buildTaskForm())
    }
   
}
const addProject = () => {
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = CategoryFactory(projInput.value);
    projects.push(newProject)
    displayProjects()
    projInput.value = ''

    console.log(projects)
}

export{
    displayProjects,
    projects,
    addProject,
    displayForms,
    toggleModal
}
