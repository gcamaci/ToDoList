import { editTask } from './app'
import { buildProjectForm,buildTaskForm,buildModal } from './ui'

let toggle = false
const main  = document.querySelector('main')
const toggleModal = (event) => {
    //const main  = document.querySelector('main')
    if(toggle === false){
        console.log(main)
        
        document.body.appendChild(buildModal()) 
    }else{
        
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