const initialUi = (() => {
    const header = document.createElement('header');
    const nav = document.createElement('nav')



    
    const main = document.createElement('main');


    //add event listener to make Modal Form.
    const taskButton = document.createElement('button')
    taskButton.innerText = 'New Task';

    

    main.append(taskButton)




    const footer = document.createElement('footer');

    document.body.append(header,nav,main,footer)
})();




function createModal(){
    const form = document.createElement('div')
    //form.method = 'post'
    //form.action = ''
    form.name = 'task-form'

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
    dateInput.setAttribute('id','date_input')

    const submit = document.createElement('button');
    submit.setAttribute('id','task_submit')
    submit.type = 'submit'
    submit.innerText = 'Add'


    submit.addEventListener('click',()=>{
        console.log(nameInput.value, dateInput.value);
        //const main = document.querySelector('main');
        //main.innerHTML = ''
    });


    form.append(nameInput,descInput,dateInput,submit);

    return form
}

export{
    initialUi,
    createModal
}