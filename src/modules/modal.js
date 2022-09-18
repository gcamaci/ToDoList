import { buildProjectForm,buildTaskForm,buildModal } from './ui'

let toggle = false
const main  = document.querySelector('main')
const toggleModal = () => {
    const main  = document.querySelector('main')
    if(toggle === false){
        console.log(main)
        main.style.gridColumn = "4/10"
        main.style.gridRow = "2"
        document.body.appendChild(buildModal()) 
        
    }else{
        main.style.gridColumn = "4/13"
        const modal = document.querySelector('.master_Modal_Container');
        
        document.body.removeChild(modal) 
    }
    toggle = !toggle
}

function displayForms(event){
    const container = document.getElementById('modal_Forms');
    container.innerHTML = ''
    
    if(event.target.id === 'new_Project'){
        container.appendChild(buildProjectForm())
    }else{
        container.appendChild(buildTaskForm())
    }
       
}




export{
    toggleModal,
    displayForms
}