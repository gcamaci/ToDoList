import { taskFactory,categoryFactory } from "./factory";
import { navProjButton,projectModal } from "./ui";
const gym = categoryFactory('Gym');
const coding = categoryFactory('Coding')
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

function makeFalse(){
    toggle = !toggle
    console.log(toggle)
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
/*
function addTask(){
    const name = document.getElementById('name_input').value;
    const desc = document.getElementById('desc_input').value;
    const date = document.getElementById('date_input').value;

    let newTask = taskFactory(name,desc,date);


}
*/

export{
    displayProjects,
    projects,
    toggleProjInpt,
    makeFalse
}
