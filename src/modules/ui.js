import { addProject,toggleProjInpt } from "./nav";
import {toggleTaskForm} from "./tasks"

const navProjButton = (name) => {
    const projButton = document.createElement('button')
    projButton.innerText = name;
    projButton.classList.add('nav_pro_btn')

    return projButton
    
}

const buildNav = () => {
    const nav = document.createElement('nav')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    
    const newProject = document.createElement('button')
    newProject.innerText = 'New Project'
    newProject.id = 'add_Project_Btn'
    newProject.addEventListener('click', toggleProjInpt)

    const projectContainer = document.createElement('div')
    projectContainer.classList.add('proj_nav_container');

    nav.append(title,newProject,projectContainer)

    return nav
}

const taskModal = () => {
    const form = document.createElement('div')
    form.name = 'task-form'
    form.id = 'task_Modal'

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('name','name');
    nameInput.setAttribute('id','name_input')

    const descInput = document.createElement('input');
    descInput.setAttribute('type','text')
    descInput.setAttribute('name','desc')
    descInput.setAttribute('id','desc_input')

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id','date_input');

    

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'


    form.append(nameInput,descInput,dateInput,submit);

    return form
}

const projectModal = () => {
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

const initialUi = (() => {
    const header = document.createElement('header');
    const nav = buildNav()
    const main = document.createElement('main');

    //add event listener to make Modal Form.
    const taskButton = document.createElement('button')
    taskButton.innerText = 'New Task';
    taskButton.id = 'task_button'
    taskButton.addEventListener('click',toggleTaskForm)

    main.appendChild(taskButton)
    const footer = document.createElement('footer');
    document.body.append(header,nav,main,footer)
})();


export{
    initialUi,
    taskModal,
    navProjButton,
    projectModal,
   
}