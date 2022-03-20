import axios from 'axios'
import { createContext, useState } from 'react';

export const CreateContext = createContext()

export const NavBar = ({children}) =>{
    const [log,setlog] = useState(false)
    const [token,setToken] = useState(false)
    let data = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }

    function getToken () {
        axios.post('https://reqres.in/api/login', data)
        .then(function (response) {
            setlog(true)
            setToken(response.data.token);
            
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    
    function logout(){
        setlog(false)
        
    }
    const toggle = ()=>{
        if(!log){
            return `login`
        }else{
            return 'logout'
        }
    }
    
    return (<>
    
        <div style={{
          width:'98%',
          height:'100px',
          border: '1px solid red'
        }}>
        
        <button onClick={()=>{
           if(!log){
               getToken()
           }else{
               logout()    
               setToken(false)    
           }
        }}>{toggle()}</button>
        
        </div>
        <CreateContext.Provider value={{log,token}}>{children}</CreateContext.Provider>
        
        </>)
    }