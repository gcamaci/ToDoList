const taskFactory = (name,desc,date) => {
    let status = false;
    const getDesc = () => desc
    const getName = () => name
    const setDesc = (newDesc) => {
        desc = newDesc;
    }

    const setDate = (newDate) => date = newDate
    
    const getDate = () => date

    return {
        status,
        getDesc,
        setDesc,
        getDate,
        setDate,
        getName
    }
}

const categoryFactory = (name) => {
    let taskStorage = [];

    const pushTask = (task) => {
        taskStorage.push(task);
    }

    const getName = () => name

    return {taskStorage,getName,pushTask}
}




export{
    taskFactory,
    categoryFactory
}

