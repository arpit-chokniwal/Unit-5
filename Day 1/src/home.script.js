function tab(){
let arr = [] || JSON.parse(localStorage.getItem('data'))
document.getElementById("butt").addEventListener("click",dalo)
function dalo(){
    let work = document.getElementById("work").value;
    let note = document.getElementById("note").value;
    let priority = document.getElementById("priority").value;

    let obj = {
        work: work,
        note : note,
        priority : priority
    }
    console.log(obj)

    arr.push(obj)

    localStorage.setItem('data', JSON.stringify(arr));
    table()
}
console.log(1234)
table()
function table() {
    console.log(arr)
    document.querySelector('tbody').innerHTML = null
    arr.map((e)=>{
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td1.textContent = e.work
        td2.textContent = e.note
        td3.textContent = e.priority
        td4.textContent = "Delete"
        td4.addEventListener("click",dele)
        tr.append(td1, td2, td3 ,td4)
        document.querySelector('tbody').append(tr)          
    })
}

function dele(e) {
    
    e.target.parentNode.remove()
}
}

export default tab