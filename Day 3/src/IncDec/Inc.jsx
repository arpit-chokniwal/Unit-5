import React, { useState }  from "react" 

function Inc(){
    const [count, setCount] = useState(0)
    function IncDec(key){
      if((count + key) >= 0 && (count + key) <= 10)
      setCount(count + key)
    }
    function Doub(){
      if((count*2)>0 && (count*2) <= 10){
      setCount(count*2) 
      } 
    }
return (
    <>
    <h2>{ count } time you hit me</h2>
    <button onClick={()=>IncDec(1)}>Increment</button>
    <button onClick={()=>IncDec(-1)}>Decrement</button>
    <button onClick={()=>Doub()}>Double</button>
    
    </>
)
}
export default Inc