import {CategoryFactory,TaskFactory } from "./factory";
import { toggleModal } from "./Modal";
import {createNavButton,giveDomInpts,buildTaskElement } from "./ui";
import { storeProject,localProjects,saveProjectList} from "./storage";
import {format} from 'date-fns'



let navState = false
let currentProject = localProjects[1]


const projDrop = () => { 
    const container = document.getElementById('proj_container')
    console.log(container)
    
    if(navState === false){
        container.classList.remove('hide')
        container.classList.add('show')
        navState = !navState;
        console.log(navState)
        
    }else{
        container.classList.remove('show')
        container.classList.add('hide')
        navState = !navState
        console.log(navState)
    }
    
}
const formatTitle = str => str.charAt(0).toUpperCase()+str.slice(1)
//create Task Dom, display Task Dom, and add event listeners
//display Tasks and All tasks should be made into one single function,for better re-usability
const displayTasks = () => {
    const taskContainer = document.querySelector('main')
    taskContainer.innerHTML = ''
    console.log(currentProject.name)
    const category = document.createElement('h2')
    category.innerText = currentProject.name;
    taskContainer.appendChild(category)
    currentProject.taskStorage.forEach((task)=>{
        let date= task.date.replaceAll('-', ',')
        let name = formatTitle(task.name)
        let formatDate = format(new Date(date),'MMM do, yy')
        console.log(formatDate)
        let taskElement = buildTaskElement(
            name,
            task.desc,
            formatDate,
            task.idCode,
            task.status
        )
        taskContainer.appendChild(taskElement);
        
    })
    
    if(currentProject.taskStorage.length === 0){
        const freshMessageContainer = document.createElement('div');
        const freshMessage = document.createElement('h1')
        freshMessage.innerText = 'Those who wander are not lost'

        const imageContainer = document.createElement('div')
        imageContainer.classList.add('fresh-image')

        freshMessageContainer.append(freshMessage,imageContainer)
        freshMessageContainer.classList.add('fresh-container')
        taskContainer.appendChild(freshMessageContainer)
        console.log(taskContainer.style.backgroundImage)
    }


    const taskButtons = document.querySelectorAll('.task_Btn')
    taskButtons.forEach((btn) =>{
        btn.addEventListener('click',taskListeners)
    });
}





//sets placeholder values in modal task from,sets attribute to edit instead of create in addtasktoproj
const editTask = (event) => {
    toggleModal()
    const domElements = giveDomInpts()
    let taskArray = getAllTasks();
    const task = taskArray.find(task => task.idCode == event.target.dataset.taskId)
    //const card = document.querySelector(`[data-task-code = "${event.target.dataset.taskId}"]`)

    domElements.taskName.value= task.name
    domElements.taskDesc.value = task.desc
    domElements.taskCategory.value = task.category
    console.log(domElements.taskName)


    console.log(domElements)

    console.log(parseFloat(task.date))
    //console.log(card)
    console.log(task.date)

    const subBtn = document.getElementById('task_submit');
    console.log(subBtn)
    subBtn.dataset.setEdit = true;
    subBtn.dataset.taskNum = task.idCode;


}

const getAllTasks = () =>{
    let taskArray = [];
    localProjects.forEach((project) =>{
        taskArray.push(project.taskStorage)
    })
    //combines all arrays inside taskArray into one single array
    taskArray = taskArray.flat(1);

    return taskArray;
}


const activeBtn = () => {
    const navBtns = document.querySelectorAll('.nav_btns')
    navBtns.forEach((btn)=>{
        console.log(btn.dataset.project)
    })
}
const toggleProject = (event) =>{
    let taskArray = getAllTasks();
    const navBtns = document.querySelectorAll('.nav_btns')
    activeBtn()
    if(event.target.dataset.project === "Favorites"){
        const finishedTasks = CategoryFactory('Completed Tasks')
        taskArray.forEach((task)=>{
            if(task.status===true){
                finishedTasks.taskStorage.push(task);
            }
        })
        currentProject = finishedTasks
    }else if(event.target.dataset.project === 'All'){
        const newProj = CategoryFactory('All Tasks')
        newProj.taskStorage = taskArray
        currentProject = newProj;

    }else{
        localProjects.forEach((project)=>{
            if(project.name === event.target.dataset.project){
                currentProject = project
            }
        })

    }
    displayTasks()
}




const updateTask = (code) => {
    const taskArray = getAllTasks();
    const oldTask = taskArray.find(task => task.idCode == code)
    const DOM = giveDomInpts()


    localProjects.forEach(project => {
        if(project.name === oldTask.category){
            const index = project.taskStorage.findIndex(todo=>todo.idCode == code)
            project.taskStorage[index].name = DOM.taskName.value
            project.taskStorage[index].desc = DOM.taskDesc.value
            //project.taskStorage[index].category = DOM.taskCategory.value
            project.taskStorage[index].date = DOM.taskDate.value
        }
    });
    console.log(taskArray)
    console.log(oldTask)
    
}


//create a task and Push it to the correct project task array
const addTaskToProj = (event) =>{
    const DOM = giveDomInpts()
    
    if(event.target.dataset.setEdit){
        updateTask(event.target.dataset.taskNum)
    }else{
        console.log(false)
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
        console.log(DOM.taskDate.value)
    }

    saveProjectList()
    toggleModal()
    displayTasks()
}
//adds Project to projects array
const addProject = () => {
    const projContainer = document.getElementById('proj_container')
    const projInput = document.getElementById('proj_Name_Inpt');
    let newProject = CategoryFactory(projInput.value);
    storeProject(newProject)    
    toggleModal()
    let newProjDom = createNavButton(newProject.name)
    projContainer.appendChild(newProjDom)
    projInput.value = ''

    
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

const removeTask = (taskId,project) => {
    currentProject.taskStorage.forEach((task,index)=>{
        if(task.idCode == taskId){
            currentProject.taskStorage.splice(index,1);
        }
    })


    displayTasks()
    saveProjectList()
}


function taskStatus(code){
    const domElements = document.querySelectorAll('.status-btn')
    let domElement ;
    domElements.forEach((btn)=>{
        console.log(btn.dataset.taskId)
        if(btn.dataset.taskId == code){
            domElement = btn
        }
    })

    currentProject.taskStorage.forEach((task)=>{
        if(task.idCode == code){
            task.status = !task.status
            if(task.status === true){
                domElement.classList.add('task-status-green');
                domElement.classList.remove('task-status-red')
            }
            else{
                domElement.classList.remove('task-status-green');
                domElement.classList.add('task-status-red')
            }
            console.log(task.idCode)
            console.log(task.status)
        }
    })
    saveProjectList()
    //displayTasks()
    
}

export {
    addProject,
    addTaskToProj,
    displayTasks,
    editTask,
    toggleProject,
    projDrop
}