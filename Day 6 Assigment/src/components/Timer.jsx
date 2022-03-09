import React, { useEffect, useState } from "react";

function Timer({st,et,speed}){
    const [count, setCount] = useState(st)
    const sped = speed<=2?(1000/speed):1000

    useEffect(()=>{
        let stop = setInterval(()=>{
            setCount((pre)=>{
                if(pre >=et){
                    clearInterval(stop)
                    return et
                }
                return pre+1
            })
            console.log(1)
        },sped)
        return ()=>{clearInterval(stop)}
    },[])
    

    return(
        <>
        <h3>Timer : {count}</h3>
        </>
    )
}
export default Timer