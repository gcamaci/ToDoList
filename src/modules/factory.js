const TaskFactory = (name,desc,date,category) => {
    let status = false;
    const getDesc = () => desc
    const getName = () => name
    const getCategory = () => category
    const setDesc = (newDesc) => desc = newDesc
    const setDate = (newDate) => date = newDate
    const getDate = () => date
    

    return {
        status,
        getDesc,
        setDesc,
        getDate,
        setDate,
        getName,
        getCategory
    }
}

const CategoryFactory = (name) => {
    let taskStorage = [];

    const pushTask = (task) => {
        taskStorage.push(task);
    }

    const getName = () => name

    return {taskStorage,getName,pushTask}
}




export{
    TaskFactory,
    CategoryFactory
}

