const task = document.querySelector('#task')
const heads = [
    { inForm: "taskTitle", inView: "Task Title" },
    { inForm: "taskContent", inView: "Task Content" },
    { inForm: "taskDetails", inView: "Task Details" }
]
saveDataToStorage = (data) => {
    localStorage.setItem('myTasks', JSON.stringify(data))
}
getDataFromStorage = () => {
    let myTasks
    try {
        myTasks = JSON.parse(localStorage.getItem('myTasks'))
        if (!Array.isArray(myTasks)) throw new Error()
    }
    catch (e) {
        myTasks = []
    }
    return myTasks
}
const myTasks = getDataFromStorage()
editForm=document.querySelector('#editForm')

if (task) {
    task.addEventListener('submit', function (e) {
        e.preventDefault()
        let task = {}
        heads.forEach(h => task[h.inForm] = this.elements[h.inForm].value)
        myTasks.push(task)
        saveDataToStorage(myTasks)
        this.reset()
        window.location.replace('index.html')
    })

}
const createMyOwnElements = (element, parent, txt = "", classes = "", attributes = "") => {
    let el = document.createElement(element)
    parent.appendChild(el)
    if (txt != '') el.textContent = txt
    if (classes != "") el.classList = classes
    return el
}
const drawTable = (myTasks) => {
    table.textContent=""
    let thead = createMyOwnElements('thead', table)
    createMyOwnElements('th', thead, '#')
    heads.forEach(h => createMyOwnElements("th", thead, h.inView))
    createMyOwnElements('th', thead, 'actions')
    let tbody = createMyOwnElements('tbody', table)
    if (myTasks.length == 0) {
        let tr = createMyOwnElements('tr', tbody)
        let td = createMyOwnElements('td', tr, "no data")
        td.colSpan = "3"
    }
    else {
        myTasks.forEach((task, i) => {
            let tr = createMyOwnElements('tr', tbody)
            createMyOwnElements('td', tr, i+1)
            heads.forEach((h, i) => createMyOwnElements('td', tr, task[h.inForm]))
            let td = createMyOwnElements('td', tr)
            let delbtn = createMyOwnElements('button', td, "delete", "btn btn-danger mx-3")
            delbtn.addEventListener('click',  function() { deleteItem(i) } )
            let editBtn = createMyOwnElements('button', td, "Edit", "btn btn-warning")
            editBtn.addEventListener('click', function(e){
                editForm.classList.remove('d-none')
                editForm.elements.taskTitle.value = myTasks[i].taskTitle
                editForm.elements.taskContent.value = myTasks[i].taskContent
                editForm.elements.taskDetails.value = myTasks[i].taskDetails
                console.log(i)
                localStorage.setItem('editIndex', i)
            })
            
        })
    }
}
editForm.addEventListener('submit', function(e){
    e.preventDefault()
    let i = localStorage.getItem('editIndex')
    let task = {
        taskTitle: editForm.elements.taskTitle.value,
        taskContent : editForm.elements.taskContent.value,
        taskDetails :editForm.elements.taskDetails.value
    }
    myTasks[i]=task
    saveDataToStorage(myTasks)
    editForm.classList.add('d-none')
    drawTable(myTasks)
    })

const deleteItem = (index)=>{
    myTasks.splice(index, 1)
    saveDataToStorage(myTasks)
    drawTable(myTasks)
}
const table = document.querySelector('#tableData')
if (table) {
    drawTable(myTasks)
}