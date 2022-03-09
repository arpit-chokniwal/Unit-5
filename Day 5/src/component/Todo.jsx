import React, { useEffect, useState } from "react";
function Todo(){
    const [t,sett]= useState("")
    const [p,setp]= useState("")
    const [s,sets]= useState(0)
    const [data,setdata] = useState([])
    const [callget,setcallget] = useState(0)
    const [page,setpage] = useState(1)
    const tododataPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: t , Prioty : p , Status: s})
    };  
    useEffect(()=>{
    async function get(){
        let data = await fetch(`http://localhost:3001/Todo/?_limit=5&_page=${page}`)
        let arr = await data.json()
        setdata([...arr])
    }
    get()
    },[callget,page])     

    function del(e){
        fetch(`http://localhost:3001/Todo/${e}`,{ method: 'DELETE' })
        setcallget(callget+1)
    }

return (<>
   <input type="text" placeholder="Task" onChange={(e) =>{
       sett(e.target.value)
    }}/>

    
    <select onChange={(e)=>{setp(e.target.value)}}>
    <option>Priorty</option>
    <option value="High">High</option>
    <option value="Mid">Mid</option>
    <option value="Low">Low</option>
    </select>
    
    
    <select onChange={(e)=>{sets(e.target.value)}}>
    <option value="">Status</option>
    <option value="Done">Done</option>
    <option value="Not Done">Not Done</option>
    </select>

   <button onClick={()=>{
    fetch('http://localhost:3001/Todo', tododataPost)
    setcallget(callget+1)
}} id="btn" >Submit</button>


{data.map((e)=>{
    return <>
    <h4>title : {e.title}</h4>
    <h4>Priorty : {e.Prioty}</h4>
    <h4>Status : {e.Status}</h4>
    <button id="delbtn" onClick={()=>del(e.id)}>Delete</button>
    </>

})}
<br/>
<br/>
<button onClick={()=>{
    setpage(page-1)
}}>Pre Page </button>
<button onClick={()=>{
    setpage(page+1)
}}>Next Page </button>

    </>)
}
export default Todo;