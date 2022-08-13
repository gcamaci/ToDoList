import {CategoryFactory } from "./factory";
import { navProjButton,projectModal,taskModal,mainModal } from "./ui";
const gym = CategoryFactory('Gym');
const coding = CategoryFactory('Coding')
let projects = [gym,coding]
let toggle = false

const toggleModal = () => {
    if(toggle === false){
        document.body.appendChild(mainModal())
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
        container.appendChild(navProjButton(project.getName()))
        

    });
   
}
function displayForms(event){
    const container = document.getElementById('modal_Forms');
    container.innerHTML = ''

    if(event.target.id === 'new_Project'){
        container.appendChild(projectModal())
    }else{
        container.appendChild(taskModal())
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
