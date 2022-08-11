import { taskFactory,categoryFactory } from "./factory";
import { navProjButton } from "./ui";
const gym = categoryFactory('Gym');
const coding = categoryFactory('Coding')
let projects = [gym,coding]


function displayProjects(){
    const container = document.querySelector('.proj_nav_container')
    container.innerHTML = ''
    projects.forEach((project)=>{
        container.appendChild(navProjButton(project.getName()))

    });
   
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
}
