const TaskFactory = (name,desc,date,category) => {
    let status = false;
    const idCode = Math.floor(Math.random() * 1000)

    return {
        idCode,
        status,
        desc,
        date,
        category,
        name
    }
}

const CategoryFactory = (name) => {
    let taskStorage = [];

    const pushTask = (task) => {
        taskStorage.push(task);
    }

    const getName = () => name;

    /*
    const removeTask = (taskId) => {
        taskStorage.forEach((task,index)=>{
            if(task.idCode == taskId){
                taskStorage.splice(index,1);
            }
        })
    }
    */
    
    return {taskStorage,getName,pushTask,name}
}




export{
    TaskFactory,
    CategoryFactory
}

