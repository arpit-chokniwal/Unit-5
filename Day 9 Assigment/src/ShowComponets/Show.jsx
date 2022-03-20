import { useContext } from "react"
import {CreateContext} from '../NavuBar/NavBar'

const raju = (log,token)=>{
    if(log){
        // console.log(log,token)
        return <h3>Token:{token}</h3>
        }
    }

    const stat = (log) =>{
    
        if(log){
            return 'Login'
        }else{
            return 'Not Login'
        }

    }

export const Show = () =>{

const {log, token} = useContext(CreateContext)

return (<>
    
    <h2>Status: {stat(log)}</h2>    
    {raju(log,token)}
    
    </>)
}