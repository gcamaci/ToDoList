import {addProject,toggleProject,addTaskToProj,displayTasks,editTask, projDrop} from "./app";
//import { addTaskToProj } from "./tasks";
import { toggleModal,displayForms } from "./Modal";
import { localProjects } from "./storage";

import pencil from '../icons/pencil.png'
import favorite from '../icons/favorite.png'
import trash from '../icons/trash.png'



const buildHeader = () => {
    const header = document.createElement('header');
    const headTitleContainer = document.createElement('div')

    const title = document.createElement('h1');
    title.innerText = 'To-Do App';
    const logoImg = document.createElement('div')
    logoImg.classList.add('logo-img')

    headTitleContainer.append(logoImg,title)
    headTitleContainer.classList.add('head-title-container')
    const addModal = document.createElement('button')
    addModal.innerText = 'New Task'
    addModal.id = 'open_Modal'
    addModal.addEventListener('click',toggleModal)
    header.append(headTitleContainer,addModal)
    return header 
}

const createNavButton = (name) => {
    const projButton = document.createElement('button')
    projButton.classList.add('proj-btn-hover')
    projButton.innerText = name
    projButton.dataset.project = name
    
    return projButton
}



//add coding and work ToDo buttons to the main nav and not project nav. 

const buildNav = () => {
    const nav = document.createElement('nav')
    const taskButtonContainer = document.createElement('div')
    taskButtonContainer.classList.add('nav-buttons')

   
    const completeTasks = document.createElement('button')
    completeTasks.id ='completed-tasks'
    completeTasks.addEventListener('click',toggleProject);
    completeTasks.innerText = 'Favorites'
    completeTasks.dataset.project = 'Favorites'

    const allTaskBtn = document.createElement('button');
    allTaskBtn.innerText = 'All Tasks'
    allTaskBtn.id = 'all-tasks'
    allTaskBtn.addEventListener('click',toggleProject)
    allTaskBtn.dataset.project = 'All'


    const codeProj = document.createElement('button')
    codeProj.id = 'codeBtn'
    codeProj.dataset.project = 'Coding'
    codeProj.addEventListener('click',toggleProject);
    codeProj.innerText = 'Code'

    const projectMain = document.createElement('div')
    projectMain.classList.add('main-project-container')
    
    
    const projectContainer = document.createElement('div')
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('proj-nav-title')
    const title = document.createElement('h3')
    title.innerText = 'Projects'
    const expandBtn = document.createElement('button')
    expandBtn.type = 'button'
    expandBtn.id = 'expand'
    expandBtn.addEventListener('click',projDrop)
    titleContainer.append(title,expandBtn)
    projectMain.append(titleContainer,projectContainer)

    projectContainer.classList.add('proj_nav_container','hide');
    projectContainer.id = 'proj_container'
    localProjects.forEach((project)=>{
        let newNavBtn = createNavButton(project.name);
        newNavBtn.addEventListener('click',toggleProject);
        projectContainer.appendChild(newNavBtn);
        
    });
  
    const workProj = document.createElement('button')
    workProj.id = 'workBtn'
    workProj.dataset.project = 'Work'
    workProj.addEventListener('click',toggleProject)
    workProj.innerText = 'Work'


    const navBtns = [allTaskBtn,codeProj,completeTasks,workProj]
    navBtns.forEach((btn)=>{
        btn.classList.add('nav_btn')
    })
    taskButtonContainer.append(allTaskBtn,completeTasks,codeProj,workProj)
    nav.append(taskButtonContainer,projectMain)

    return nav
}
//MODAL
const buildTaskForm = (event) => {
    const form = document.createElement('div')
    form.name = 'task-form'
    form.id = 'task_Modal'

    const title = document.createElement('h3')
    title.innerText = "Create Task"

    const nameInput = document.createElement('input');
    nameInput.type = 'text'
    nameInput.name = 'name'
    nameInput.id = 'name_input'
    nameInput.classList.add('task-inpt')
    nameInput.placeholder = "Title"

    const descInput = document.createElement('textarea');
    descInput.setAttribute('type','text')
    descInput.setAttribute('name','desc')
    descInput.setAttribute('id','desc_input')
    descInput.classList.add('task-inpt')
    descInput.placeholder = "Description"

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('name', 'date');
    dateInput.setAttribute('id','date_input');
    dateInput.classList.add('task-inpt')
    
    

    const project = document.createElement('select');
    localProjects.forEach((proj)=>{
        const opt = document.createElement('option')
        opt.value = proj.name
        opt.innerText = proj.name

        project.appendChild(opt)
    });

    
    project.name = 'category'
    project.id = 'project_Assign'
    project.classList.add('task-inpt')
    

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'
    submit.addEventListener('click',addTaskToProj)


    const textForm = document.createElement('div')
    textForm.classList.add('text-form')
    textForm.append(nameInput,descInput)

    const optForm = document.createElement('div')
    optForm.classList.add('opt-form')
    optForm.append(dateInput,project)
    const entry = document.createElement('div')
    entry.classList.add('entry-container')
    entry.append(textForm,optForm)
    form.append(title,entry,submit);

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
    
    const modalBtns = document.createElement('div')
    modalBtns.classList.add('modal-btn-container')
    const project = document.createElement('button')
    project.id = 'new_Project'
    project.classList.add('modal-btn')
    project.innerText = 'Project'
    project.addEventListener('click',displayForms)

    const todo = document.createElement('button')
    todo.id = 'new_Task';
    todo.innerText = 'Task'
    todo.classList.add('modal-btn')
    todo.addEventListener('click',displayForms)

    const formContainer = document.createElement('div')
    formContainer.id = 'modal_Forms'
    const firstForm = buildTaskForm();
    formContainer.appendChild(firstForm)

    const closeOut = document.createElement('button')
    
    closeOut.addEventListener('click',toggleModal)
    closeOut.classList.add('close-modal')
    modalBtns.append(project,todo)
    nav.append(modalBtns,closeOut)
    modal.append(nav,formContainer)
    mainContainer.append(modal)

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
const buildTaskElement = (name,desc,date,code,status) => {
    const taskCard = document.createElement('div');
    taskCard.classList.add('task_card')
    taskCard.dataset.taskCode = `${code}`

    const title = document.createElement('div')
    title.classList.add('title-container')
    const titleTag = document.createElement('h3')
    titleTag.innerText = name
    title.appendChild(titleTag)
    

    const description = document.createElement('div')
    const descriptionTag = document.createElement('p')
    descriptionTag.innerText = desc
    description.classList.add('task-description')
    description.appendChild(descriptionTag)

    //const dueDate = document.createElement('div')
    const dateTag = document.createElement('p')
    dateTag.innerText = date
    title.appendChild(dateTag)

    
    const edit = document.createElement('button')
    
    edit.dataset.taskId = code
    edit.name = 'Edit'
    edit.id = 'edit-task'
    edit.style.backgroundImage = `url(${pencil})`
    edit.classList.add('task_Btn')
    edit.addEventListener("click",editTask)
        
  
    const taskBtnContainer = document.createElement('div')
    taskBtnContainer.classList.add('task-btn-container')

    const deleteTask = document.createElement('button')
    deleteTask.style.backgroundImage = `url(${trash})`
    deleteTask.dataset.taskId = code 
    deleteTask.classList.add('task_Btn')
    deleteTask.classList.add('delete-btn')
    deleteTask.name = 'Delete'
    

    const markComplete = document.createElement('button')
    markComplete.dataset.taskId = code
    markComplete.classList.add('task_Btn')
    markComplete.name = 'Status'
    markComplete.style.backgroundImage = `url(${favorite})`
    markComplete.classList.add('status-btn')
    
    if(status===true){
        markComplete.classList.add('task-status-green');
        markComplete.classList.remove('task-status-red')
    
    }else{
        markComplete.classList.remove('task-status-green');
        markComplete.classList.add('task-status-red')

    }

    taskBtnContainer.append(deleteTask,markComplete,edit)
    

    taskCard.append(
        title,
        description,
        taskBtnContainer

    )

    return taskCard
}




const loadpage = () =>{
    const header = buildHeader()
    const nav = buildNav()
    const main = document.createElement('main');
    const footer = document.createElement('footer')
    //add footer
    document.body.append(header,nav,main,footer)
    
    //displayTasks()
};
//
export{
    loadpage,
    createNavButton,
    buildTaskForm,
    buildProjectForm,
    buildModal,
    giveDomInpts,
    buildTaskElement
}



