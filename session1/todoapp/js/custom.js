const task = document.querySelector('#task')
const heads = ["taskTitle", "taskContent", "taskDetails"]

saveDataToStorage = (data) =>{
    localStorage.setItem('myTasks', JSON.stringify(data))
}

getDataFromStorage = () =>{
    let myTasks
    try{
        myTasks = JSON.parse(localStorage.getItem('myTasks'))
        if(!Array.isArray(myTasks)) throw new Error()
    }
    catch(e){
        myTasks=[]
    }
    return myTasks
}

const myTasks = getDataFromStorage()
if(task){
    task.addEventListener('submit', function(e){
        e.preventDefault()
        let task ={ }
        heads.forEach( h => task[h]= this.elements[h].value )
        myTasks.push(task)
        saveDataToStorage(myTasks)
        this.reset()
        setTimeout(()=>{
            window.location.replace('index.html')
        },1000)
    })
    
}


