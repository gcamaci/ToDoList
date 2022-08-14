import { displayTasks,addProject,addTaskToProj,displayProjects} from "./app";
//import { addTaskToProj } from "./tasks";
import { toggleModal,displayForms } from "./Modal";

const loadpage = () =>{
    const header = document.createElement('header')
    const nav = buildNav()
    const main = document.createElement('main');
    const footer = document.createElement('footer');
    document.body.append(header,nav,main,footer)
    displayProjects()
};

const createNavButton = (name) => {
    const projButton = document.createElement('button')
    projButton.innerText = name
    projButton.dataset.project = name
    projButton.addEventListener('click',displayTasks)
        
   
    return projButton
}
const buildNav = () => {
    const nav = document.createElement('nav')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    
    const projectContainer = document.createElement('div')
    projectContainer.classList.add('proj_nav_container');

    const addModal = document.createElement('button')
    addModal.innerText = '+'
    addModal.id = 'open_Modal'
    addModal.addEventListener('click',toggleModal)
    nav.append(title,projectContainer,addModal)
    
    
    return nav
}
//MODAL
const buildTaskForm = () => {
    const form = document.createElement('div')
    form.name = 'task-form'
    form.id = 'task_Modal'

    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.id = 'name_input'

    const descInput = document.createElement('input');
    descInput.setAttribute('type','text')
    descInput.setAttribute('name','desc')
    descInput.setAttribute('id','desc_input')

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id','date_input');

    const project = document.createElement('input')
    project.type = 'text'
    project.name = 'category'
    project.id = 'project_Assign'

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'
    submit.addEventListener('click',addTaskToProj)

    form.append(nameInput,descInput,dateInput,project,submit);

    return form
}
const buildProjectForm = () => {
    const modalContainer = document.createElement('div')
    modalContainer.classList.add('project_modal')

    const projName = document.createElement('input');
    projName.id = 'proj_Name_Inpt';
    projName.name = 'project_Name_Inpt';
    
    const addProjBtn = document.createElement('button')
    addProjBtn.id = 'add_Proj_Button'
    addProjBtn.innerText = 'Add'
    addProjBtn.addEventListener('click',addProject)

    modalContainer.append(
        projName,
        addProjBtn
    )
    return modalContainer
}
const buildModal = () => {
    const mainContainer = document.createElement('div')
    mainContainer.classList.add('master_Modal_Container')
    const modal = document.createElement('div');
    modal.id = 'master_Modal'

    const nav = document.createElement('div')
    nav.id = 'master_Modal_Nav'
 
    const project = document.createElement('button')
    project.id = 'new_Project'
    project.innerText = 'Project'
    project.addEventListener('click',displayForms)

    const todo = document.createElement('button')
    todo.id = 'new_Task';
    todo.innerText = 'Task'
    todo.addEventListener('click',displayForms)
    const formContainer = document.createElement('div')
    formContainer.id = 'modal_Forms'

    const closeOut = document.createElement('button')
    closeOut.innerText = 'X'
    closeOut.addEventListener('click',toggleModal)

    nav.append(project,todo)
    modal.append(nav,formContainer)
    mainContainer.append(modal,closeOut)

    return mainContainer

}
const giveDomInpts = () => {
    const taskName = document.getElementById('name_input')
    const taskDesc = document.getElementById('desc_input')
    const taskDate = document.getElementById('date_input')
    const taskCategory = document.getElementById('project_Assign')

    return {
        taskName,
        taskDesc,
        taskDate,
        taskCategory
    }
}

export{
    loadpage,
    createNavButton,
    buildTaskForm,
    buildProjectForm,
    buildModal,
    giveDomInpts
}



