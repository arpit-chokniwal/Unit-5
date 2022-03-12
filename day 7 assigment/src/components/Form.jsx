import React, { useEffect, useState } from "react";
import FormShow from "./FormShow";

function Form(){
const [change,setChange] = useState({
    name:'',
    age:'',
    address:'',
    department:'',
    salary:''
})

const Data = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(change)
};
const iamChanging =(e)=>{
    setChange({
        ...change,
        [e.target.id] : e.target.value        
    })
}
const setToBackend = (e) =>{
    e.preventDefault()
    console.log('1----------1111111111111-----------------');
    fetch('http://localhost:3001/employe',Data)
    setChange({
        name:'',
        age:'',
        address:'',
        department:'',
        salary:''
    })
}
    return (<>
        
    <h2>Employe details</h2>
        <form onSubmit={setToBackend}>        
        <input id="name" placeholder="Name" onChange={iamChanging} type='text' value={change.name} />
        <input id="age" placeholder="Age" onChange={iamChanging} type='number' value={change.age}/>
        <input id="address" placeholder="Address" onChange={iamChanging} type='text' value={change.address}/>
        <select onChange={iamChanging} id='department'  value={change.department}>
        <option >Select Department</option>
        <option value='information technology'>information technology</option>
        <option value="Managment">Managment</option>
        <option value="Placement Team">Placement Team</option>
        <option value="HR">HR</option>
        </select>
        <input id="salary" placeholder="Salary" onChange={iamChanging} type='number'  value={change.salary}/>
       
        <input type='submit' value='Submit'  />
        </form>
        <FormShow />
        
    </>)
}
export default Form