import { projects } from "./app";


const initialStorage = (() => {
    if(localStorage.length  === 0 ){
        console.log('working')
    }
})()





const storeProject = (newProj) => {

    let newProjList = JSON.parse(localStorage.getItem("projects"));
    newProjList.push(newProj)
    localStorage.setItem("projects", JSON.stringify(newProjList))
}

export{storeProject}