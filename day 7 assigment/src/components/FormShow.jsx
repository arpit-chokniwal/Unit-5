import React, { useEffect, useState } from "react";
import './Formshow.css' 
function FormShow(){
    console.log(1)
    let [data,setData] = useState([])

    useEffect(()=>{

        dat()

    },[])

    async function dat(){
        let a= await fetch('http://localhost:3001/employe')
        let res = await a.json()
        setData(res)
    }

    return(<>

        <h2>Employee details</h2>
        <div className="main">

        {data.map((e)=>{

           return (<>
            <div className="all">
            <h3>Name : {e.name}</h3>
            <h3>Age : {e.age}</h3>
            <h3>Address : {e.address}</h3>
            <h3>Department : {e.department}</h3>
            <h3>salary : {e.salary}</h3>
            </div>
            </>)
            
        })}
        
        </div>

    </>)
}
export default FormShow