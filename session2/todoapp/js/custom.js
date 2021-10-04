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
    //create element, append parent , text content, classes, attributes
    let el = document.createElement(element)
    parent.appendChild(el)
    if (txt != '') el.textContent = txt
    if (classes != "") el.classList = classes
    return el
}
const drawTable = (myTasks) => {
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
            let editBtn = createMyOwnElements('button', td, "Edit", "btn btn-warning")
        })
    }
}

const table = document.querySelector('#tableData')
if (table) {
    drawTable(myTasks)
}


