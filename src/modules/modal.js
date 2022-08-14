import { buildProjectForm,buildTaskForm,buildModal } from './ui'

let toggle = false
const toggleModal = () => {
    if(toggle === false){
        document.body.appendChild(buildModal()) 
    }else{
        const modal = document.querySelector('.master_Modal_Container')
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