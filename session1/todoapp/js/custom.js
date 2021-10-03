const task = document.querySelector('#task')
const heads = [
    {inForm:"taskTitle", inView:"Task Title"},
    {inForm:"taskContent", inView:"Task Content"},
    {inForm:"taskDetails", inView:"Task Details"}
]

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
        heads.forEach( h => task[h.inForm]= this.elements[h.inForm].value )
        myTasks.push(task)
        saveDataToStorage(myTasks)
        this.reset()
        setTimeout(()=>{
            window.location.replace('index.html')
        },1000)
    })
    
}

const table = document.querySelector('#tableData')
if(table){
    let thead = document.createElement('thead')
    table.appendChild(thead)
    heads.forEach( h =>{
        let th = document.createElement('th')
        th.textContent = h.inView
        thead.appendChild(th)    
    })
    tbody= document.createElement('tbody')
    table.appendChild(tbody)
    if(myTasks.length==0){  
        tr = document.createElement('tr')
        tbody.appendChild(tr)
        td= document.createElement('td')
        td.colSpan="3"
        td.textContent= 'no data'
        tr.appendChild(td)
    }
    else{
        myTasks.forEach(task=>{
            tr = document.createElement('tr')
            tbody.appendChild(tr)
            heads.forEach(h=>{
                td= document.createElement('td')
                td.textContent= task[h.inForm]
                tr.appendChild(td)
    
            })
        })
    }
}


