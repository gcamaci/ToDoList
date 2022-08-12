import {CategoryFactory } from "./factory";
import { navProjButton,projectModal } from "./ui";
const gym = CategoryFactory('Gym');
const coding = CategoryFactory('Coding')
let projects = [gym,coding]
let toggle = false


//Nav controlls and functions
const  displayProjects = () =>{
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    projects.forEach((project)=>{
        container.appendChild(navProjButton(project.getName()))

    });
   
}

const toggleProjInpt = () =>{
    const nav = document.querySelector('nav')
    if(toggle===false){
        nav.appendChild(projectModal())
    }else{
        const remove = document.querySelector('.project_modal')
        nav.removeChild(remove)
    }
    toggle = !toggle
    console.log(toggle)
}


const addProject = () => {
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = CategoryFactory(projInput.value);
    projects.push(newProject)
    toggleProjInpt()
    displayProjects()
    projInput.value = ''

    console.log(projects)
}



export{
    displayProjects,
    projects,
    toggleProjInpt,
    addProject
}
