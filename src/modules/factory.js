const TaskFactory = (name,desc,date,category) => {
    let status = false;
    const idCode = Math.floor(Math.random() * 1000)
    /*
    const getDesc = () => desc
    const getName = () => name
    const getCategory = () => category
    const setDesc = (newDesc) => desc = newDesc
    const setDate = (newDate) => date = newDate
    const getDate = () => date;
    const toggleStatus = () => status = !status;
    const getStatus = () => status
    */


    return {
        idCode,
        status,
        desc,
        date,
        category,
        name
        //getName,
        //getCategory,
        //getStatus,
        //toggleStatus,
    }
}

const CategoryFactory = (name) => {
    let taskStorage = [];

    const pushTask = (task) => {
        taskStorage.push(task);
    }

    const getName = () => name;


    const removeTask = (taskId) => {
        taskStorage.forEach((task,index)=>{
            if(task.idCode == taskId){
                taskStorage.splice(index,1);
            }
        })
    }

    
    return {taskStorage,getName,pushTask,removeTask,name}
}




export{
    TaskFactory,
    CategoryFactory
}

