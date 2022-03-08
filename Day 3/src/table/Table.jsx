import React , {useState} from 'react'
function Table(){
    const [a,seta] = useState([])
    function Fun(){
    let work = document.getElementById('text').value
    let note = document.getElementById('note').value
    let date = document.getElementById('date').value
    let obj = {work,note,date}
    let neww = [...a , obj]
    seta(neww)
  }
  function SortByDate(r) {
    a.sort((a,b) => {
    if(a.date>b.date)return 1 
    return -1
    })
    seta([...a])
  }
  
  function SortByNote() {
    a.sort((a,b) => {
    if(a.note>b.note)return 1 
    return -1
    })
    seta([...a])
  }
  
  
  function SortByText() {
    a.sort((a,b) => {
    if(a.text>b.text)return 1 
    return -1
    })
    seta([...a])
  }
  return (
    <div >
    <div>
    <input type="text" placeholder="Work" id="text" />    
      <input type="text" placeholder="Note" id="note" />
      <input type="Date" id="date"/>
      <button onClick = {()=>Fun()}>Submit</button>
      <button onClick ={()=>SortByDate()}>Sort By Date</button>
      <button onClick ={()=>SortByNote()}>Sort By Note</button>
      <button onClick ={()=>SortByText()}>Sort By Text</button>
    </div>
    <div>
    
      { a.map((e)=>{
        return (
        <>  
        <p>Work :- {e.work}</p>
        <p>Note :- {e.note}</p>
        <p>Date :- {e.date}</p>
        </>
        )
        }) 
      }
    
    </div>
    </div>
    )
}
export default Table