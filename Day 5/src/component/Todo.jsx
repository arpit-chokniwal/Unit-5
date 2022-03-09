import React, { useEffect, useState } from "react";
function Todo(){
    const [t,sett]= useState("")
    const [p,setp]= useState("")
    const [s,sets]= useState(0)
    const [demo,setdemo] = useState([])
    const [dele,setdel] = useState(0)
    const tododataPost = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: t , Prioty : p , Status: s})
    };  
    useEffect(()=>{
    async function get(){
        let data = await fetch('http://localhost:3001/Todo')
        let arr = await data.json()
        setdemo([...arr])
    }
    console.log(1)
    get()
    },[dele])     

    function del(e){
        fetch(`http://localhost:3001/Todo/${e}`,{ method: 'DELETE' })
        setdel(dele+1)
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
    <option>Status</option>
    <option value="Done">Done</option>
    <option value="Not Done">Not Done</option>
    </select>

   <button onClick={()=>{
    fetch('http://localhost:3001/Todo', tododataPost)
    setdemo([...demo,{ title: t , Prioty : p , Status: s}])
}} id="btn" >Submit</button>


{demo.map((e)=>{
    return <>
    <h4>title : {e.title}</h4>
    <h4>Priorty : {e.Prioty}</h4>
    <h4>Status : {e.Status}</h4>
    <button id="delbtn" onClick={()=>del(e.id)}>Delete</button>
    </>

})}
    </>)
}
export default Todo;